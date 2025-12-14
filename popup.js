document.addEventListener('DOMContentLoaded', () => {
  
  //ELEMENT REFERENCES
  const loaderContainer = document.getElementById('loaderContainer');
  const loaderMessage = loaderContainer?.querySelector('.loader-message');

  const toggle = document.getElementById('toggleFilter');
  const filteredCount = document.getElementById('filteredCount');
  const educationalCount = document.getElementById('educationalCount');
  const productivityScore = document.getElementById('productivityScore');
  const totalVideos = document.getElementById('totalVideos');
  const educationalTime = document.getElementById('educationalTime');

  // These elements may NOT exist (commented out in HTML)
  const educationalProgress = document.getElementById('educationalProgress');
  const educationalPercentage = document.getElementById('educationalPercentage');

  // LOADER MESSAGE ROTATION
  const messages = [
    "Loading your productivity insights...",
    "Preparing to boost your focus...",
    "Getting your learning stats ready...",
    "Making YouTube work better for you...",
    "Calculating your educational progress..."
  ];

  if (loaderMessage) {
    loaderMessage.textContent =
      messages[Math.floor(Math.random() * messages.length)];
  }

  // MINIMUM LOADER TIME
  const minimumLoaderTime = new Promise(resolve => setTimeout(resolve, 500));

  // RESTORE LAST STATS 
  chrome.storage.local.get(['lastStats'], result => {
    const stats = result.lastStats;

    if (stats && Date.now() - stats.timestamp < 3600000) {
      filteredCount.textContent = stats.filteredCount || 0;
      educationalCount.textContent = stats.educationalCount || 0;
      totalVideos.textContent = stats.totalVideos || 0;
      educationalTime.textContent = stats.educationalTime || '0 min';
      productivityScore.textContent = `${stats.productivityScore || 0}%`;

      if (educationalProgress && educationalPercentage) {
        educationalProgress.style.width = `${stats.educationalPercentage || 0}%`;
        educationalPercentage.textContent = `${stats.educationalPercentage || 0}%`;
      }
    }
  });

  // LOAD SETTINGS + STATS
  Promise.all([
    new Promise(resolve =>
      chrome.storage.sync.get(['distractionFilterEnabled'], resolve)
    ),
    new Promise(resolve =>
      chrome.storage.local.get(['videoStats'], resolve)
    ),
    minimumLoaderTime
  ])
    .then(([settingsResult, statsResult]) => {
      toggle.checked = !!settingsResult.distractionFilterEnabled;

      const stats = statsResult.videoStats;

      if (stats) {
        filteredCount.textContent = stats.filteredCount || 0;
        educationalCount.textContent = stats.educationalCount || 0;
        totalVideos.textContent = stats.totalVideos || 0;

        const minutes = Math.round(stats.watchTime?.educational / 60) || 0;
        educationalTime.textContent = `${minutes} min`;

        if (educationalProgress && educationalPercentage && stats.educationalPercentage !== undefined) {
          educationalProgress.style.width = `${stats.educationalPercentage}%`;
          educationalPercentage.textContent = `${stats.educationalPercentage}%`;
        }

        if (stats.productivityScore !== undefined) {
          productivityScore.textContent = `${stats.productivityScore}%`;
        }
      }

      hideLoader();
    })
    .catch(error => {
      console.error('Error loading popup data:', error);
      hideLoader();
    });

  //TOGGLE HANDLER 
  toggle.addEventListener('change', () => {
    showLoader(
      toggle.checked ? 'Enabling focus mode...' : 'Disabling focus mode...'
    );

    chrome.storage.sync.set(
      {
        distractionFilterEnabled: toggle.checked,
        lastUpdated: Date.now()
      },
      () => {
        if (toggle.checked) {
          reloadYouTubeTabs(hideLoader);
        } else {
          resetStats(() => reloadYouTubeTabs(hideLoader));
        }
      }
    );
  });

  //STORAGE UPDATES
  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync' && changes.focusFilterStats) {
      const stats = changes.focusFilterStats.newValue || {};
      filteredCount.textContent = stats.filtered || 0;
      educationalCount.textContent = stats.educational || 0;
      productivityScore.textContent = `${stats.productivity || 0}%`;
    }
  });

  //RUNTIME MESSAGES
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === 'statsUpdate' && message.stats) {
      const stats = message.stats;

      filteredCount.textContent = stats.filteredCount || 0;
      educationalCount.textContent = stats.educationalCount || 0;
      totalVideos.textContent = stats.totalVideos || 0;

      const minutes = Math.round(stats.watchTime?.educational / 60) || 0;
      educationalTime.textContent = `${minutes} min`;

      if (educationalProgress && educationalPercentage) {
        educationalProgress.style.width = `${stats.educationalPercentage || 0}%`;
        educationalPercentage.textContent = `${stats.educationalPercentage || 0}%`;
      }

      productivityScore.textContent = `${stats.productivityScore || 0}%`;
    }
  });

  //HELPER FUNCTIONS

  function showLoader(text) {
    if (!loaderContainer) return;
    if (loaderMessage) loaderMessage.textContent = text;
    loaderContainer.style.display = 'flex';
    loaderContainer.style.opacity = '1';
  }

  function hideLoader() {
    if (!loaderContainer) return;
    loaderContainer.style.opacity = '0';
    setTimeout(() => {
      loaderContainer.style.display = 'none';
    }, 200);
  }

  function reloadYouTubeTabs(callback) {
    chrome.tabs.query({ url: '*://*.youtube.com/*' }, tabs => {
      tabs.forEach(tab => chrome.tabs.reload(tab.id));
      setTimeout(callback, 500);
    });
  }

  function resetStats(callback) {
    chrome.storage.local.set(
      {
        lastStats: {
          filteredCount: 0,
          educationalCount: 0,
          totalVideos: 0,
          educationalTime: '0 min',
          educationalPercentage: 0,
          productivityScore: 0,
          timestamp: Date.now()
        }
      },
      () => {
        filteredCount.textContent = '0';
        educationalCount.textContent = '0';
        totalVideos.textContent = '0';
        educationalTime.textContent = '0 min';
        productivityScore.textContent = '0%';

        if (educationalProgress && educationalPercentage) {
          educationalProgress.style.width = '0%';
          educationalPercentage.textContent = '0%';
        }

        callback();
      }
    );
  }
});
