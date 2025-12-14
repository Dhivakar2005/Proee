const entertainmentKeywords = [
"music","comedy","trailer","gameplay","reaction","vlog","promo",
"husband","wife","couple","boyfriend","girlfriend","family",
"friends","fun","entertainment","shorts","youtube shorts",
"short","yt shorts","reels","instagram","facebook reels","snapchat",
"tiktok","tiktok trend","viral reel","trending reel","bollywood","tollywood",
"kollywood","tamil","dance","dance cover","race","choreography","freestyle dance",
"hip hop dance","classical dance","short film","hook step","songs","song","bgm",
"teaser","remix","mashup","unplugged","funny","meme","meme compilation",
"funny compilation","prank","skit","parody","spoof","roast","standup comedy",
"jokes","humor","celebrity","actor","actress","celebrity news","celebrity gossip",
"celebrity interview","celebrity lifestyle","celebrity fashion","celebrity makeup",
"celebrity skincare","celebrity workout","celebrity diet","celebrity health","paparazzi",
"celebrity spotted","celebrity look","celebrity house","celebrity car","celebrity net worth",
"romantic","love","relationship","dating","breakup","proposal","marriage","wedding","engagement",
"pregnancy","baby vlog","kids vlog","family vlog","couple vlog","husband wife vlog","open talk",
"interview","rapid fire","Q&A","ask me anything","AMA","trip","travel","travel vlog","travel guide",
"travel tips","travel hacks","travel inspiration","luxury travel","resort vlog","hotel review",
"flight experience","airport vlog","road trip","backpacking","camping","hiking","adventure",
"exploration","journey","vacation","holiday","tour","daily vlog","lifestyle vlog","morning routine",
"night routine","get ready with me","GRWM","aesthetic vlog","fashion","style","outfit","clothing",
"accessories","jewelry","makeup","skincare","beauty","cosmetics","nail art","nail design",
"nail tutorial","hairstyles","hairstyle tutorial","hairstyle ideas","hairstyle inspiration",
"hairstyle trends","hairstyle hacks","shopping","haul","saree review","saree draping",
"saree styling","saree collection","saree haul","saree lookbook","blouse","cooking","party",
"celebration","event","festival","birthday","anniversary","baby shower","bridal shower",
"bachelorette party","bachelor party","graduation","farewell","reunion","get together",
"family gathering","friends gathering","office party","concert","live performance",
"stage performance","music festival","performance video","music video","music album",
"music playlist","music mix","music compilation","audio","audio song","lofi","chill music",
"relax music","study music","background music","sleep music","rain sound","white noise","netflix",
"amazon prime","hotstar","disney plus","web series","series","show","reality show","episode",
"full episode","movie","cinema","film review","movie review","movie recap","movie explained",
"theatre reaction","korean drama","korean series","chinese drama","drama","trending","viral",
"challenge","dance challenge","singing challenge","lip sync","try not to laugh","try not to cry",
"try not to smile","try not to cringe","try not to sing","try not to dance","best moments",
"funniest moments","epic moments","fail compilation","behind the scenes","behind the scene",
"BTS","making of","on set","off set","cricket","outtakes","blooper","bloopers","funny moments","gaming",
"live stream","livestream","stream highlights","twitch","esports","walkthrough","playthrough",
"lets play","speedrun","game review","game trailer","mobile game","pc game","console game",
"multiplayer","ranked match","ASMR","oddly satisfying","satisfying video","f1","sports",
"shocking","unbelievable","watch till end","mystery video","horror story","ghost story",
"social experiment","experiment video","influencer","influencer vlog","influencer lifestyle",
"luxury lifestyle","rich lifestyle","red carpet","cwc","super hits","news","breaking news","latest news","headline","headlines","top news",
"daily news","news today","news update","news live","live news",
"press conference","media briefing","journalist","report","coverage",
"politics","political news","sports","sports news","sports update","live match","live score","India cricket", "Sports","Cricket live","match highlights","match review","post match","pre match","food","food vlog","food vlogger","street food","street food vlog",
"food review","restaurant review","hotel food","cafe review","cooking show","baking","recipe","how to cook","cook with me",
"food challenge","mukbang","food tasting","taste test","healthy food","fitness food",
"meal prep","diet plan","nutrition tips","workout","workout routine","gym vlog","gym motivation","fitness","bodybuilding","weight loss","yoga","meditation","mental health","self care","business","business news","business update","business ideas",
"startup","startup story","startup news","entrepreneur",
"entrepreneurship","founder","mystery","crime","true crime","crime story","investigation","detective","case study","India Today news","Aaj Tak","ABP News","Zee News","NDTV","Republic TV","Times Now","CNN-News18","BBC News Hindi","News18 India","India TV","TV9 Bharatvarsh","News Nation","IBN7","DD News","Lok Sabha TV","Rajya Sabha TV","politics"
];

const educationalKeywords = ["education", "tutorial", "how to", "lesson", "course", "study", "explained", "lecture"];

const distractingKeywordMessages = {
  music: "Silence can be golden when you're building skills.",
  comedy: "Laughter is great, but focus fuels real progress.",
  movie: "Blockbusters can wait—your future can't.",
  prank: "Success isn't a prank. Stay focused.",
  reaction: "React to your goals, not distractions.",
  vlog: "Build a life worth vlogging—after the work is done.",
  shorts: "Think long-term. Skip the Shorts.",
  entertainment: "Entertainment is temporary. Growth lasts.",
  trailer: "Focus on the full journey, not just the trailer.",
  gameplay: "Level up your life, not just the game.",
  bollywood: "Bollywood can wait. Your skills matter more.",
  tollywood: "Success needs focus, not subtitles.",
  kollywood: "Skip the drama. Focus on your dreams.",
  dance: "Channel that energy into meaningful progress.",
  funny: "Laughter fades. Knowledge compounds.",
  meme: "Memes are fun. Mastery is powerful.",
  romantic: "Self-discipline is the best form of self-love.",
  love: "Fall in love with learning.",
  celebrity: "Build skills and become your own success story.",
  challenge: "The real challenge is staying focused.",
  viral: "Chase skills, not viral trends.",
  reality_show: "Real success isn’t scripted.",
  skit: "Write your future, not a skit.",
  behind_the_scenes: "Great success is built behind the scenes.",
  actor: "Be the lead role in your own success story.",
  actress: "Focus on becoming the star of your own future.",
  beatbox: "Beat distractions with discipline.",
  fail_compilation: "Don’t collect failures—collect skills."
};


const motivationalOverlayStyle = `
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 2px solid rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  font-size: 14px;
  font-weight: bold;
  color: #111;
  border-radius: 14px;
  z-index: 10;
  pointer-events: none;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.15),
    inset 0 0 0 1px rgba(255, 255, 255, 0.25);
`;

let filterRunning = false;

let stats = {
  filteredCount: 0,
  educationalCount: 0,
  totalVideos: 0,
  watchTime: {
    educational: 0,
    entertainment: 0
  }
};

function isEducational(text) {
  return educationalKeywords.some(keyword =>
    text.toLowerCase().includes(keyword)
  );
}

function shouldFilterOut(text) {
  const lowerText = text.toLowerCase();
  return entertainmentKeywords.find(keyword =>
    lowerText.includes(keyword)
  );
}

function getMotivationalMessage(keyword) {
  if (distractingKeywordMessages[keyword]) {
    return distractingKeywordMessages[keyword];
  }
  const messages = Object.values(distractingKeywordMessages);
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

function trackVideoWatchTime() {
  try {
    const video = document.querySelector('video');
    if (!video) return;

    let isPlaying = false;
    let startTime = 0;
    
    const handlePlay = () => {
      try {
        isPlaying = true;
        startTime = Date.now();
        
        const videoTitle = document.querySelector('h1.ytd-video-primary-info-renderer')?.innerText || '';
        const isEducationalVideo = isEducational(videoTitle);
        
        const watchTimeInterval = setInterval(() => {
          try {
            if (!isPlaying || !document.querySelector('video')) {
              clearInterval(watchTimeInterval);
              return;
            }
            
            const currentTime = Date.now();
            const watchDuration = (currentTime - startTime) / 1000;
            
            if (isEducationalVideo) {
              stats.watchTime.educational += watchDuration;
            } else {
              stats.watchTime.entertainment += watchDuration;
            }
            
            updateProductivityStats();
            
            startTime = currentTime;
          } catch (error) {
            clearInterval(watchTimeInterval);
            console.log('Watch time interval error:', error);
          }
        }, 1000);
      } catch (error) {
        console.log('Play handler error:', error);
      }
    };
    
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', () => {
      isPlaying = false;
    });
  } catch (error) {
    console.log('Video tracking setup error:', error);
  }
}

function updateProductivityStats() {
  try {
    const totalWatchTime = stats.watchTime.educational + stats.watchTime.entertainment;
    const educationalPercentage = totalWatchTime > 0 
      ? Math.round((stats.watchTime.educational / totalWatchTime) * 100) 
      : 0;
      
    const watchTimeScore = totalWatchTime > 0 
      ? (stats.watchTime.educational / totalWatchTime) * 60 
      : 0;
    
    const videoRatioScore = stats.totalVideos > 0 
      ? (stats.educationalCount / stats.totalVideos) * 40 
      : 0;
    
    const productivityScore = Math.round(watchTimeScore + videoRatioScore);
    
    // Save stats to local storage first as backup
    chrome.storage.local.set({
      videoStats: {
        ...stats,
        educationalPercentage,
        productivityScore,
        totalVideos: stats.totalVideos,
        lastUpdated: Date.now(),
        scoreBreakdown: {
          watchTimeScore: Math.round(watchTimeScore),
          videoRatioScore: Math.round(videoRatioScore),
          watchTimePercent: totalWatchTime > 0 ? Math.round((stats.watchTime.educational / totalWatchTime) * 100) : 0,
          videoRatioPercent: stats.totalVideos > 0 ? Math.round((stats.educationalCount / stats.totalVideos) * 100) : 0
        }
      }
    });

    // Then try to send message with score breakdown
    chrome.runtime.sendMessage({
      type: 'statsUpdate',
      stats: {
        ...stats,
        educationalPercentage,
        productivityScore,
        totalVideos: stats.totalVideos,
        scoreBreakdown: {
          watchTimeScore: Math.round(watchTimeScore),
          videoRatioScore: Math.round(videoRatioScore),
          watchTimePercent: totalWatchTime > 0 ? Math.round((stats.watchTime.educational / totalWatchTime) * 100) : 0,
          videoRatioPercent: stats.totalVideos > 0 ? Math.round((stats.educationalCount / stats.totalVideos) * 100) : 0
        }
      }
    }, response => {
      if (chrome.runtime.lastError) {
        console.log('Stats update error:', chrome.runtime.lastError);
        // Re-initialize the content script if extension context is invalid
        if (chrome.runtime.lastError.message.includes('Extension context invalidated')) {
          window.location.reload();
        }
      }
    });
  } catch (error) {
    console.log('Stats update error:', error);
    // If extension context is invalid, reload the page
    if (error.message.includes('Extension context invalidated')) {
      window.location.reload();
    }
  }
}

function calculateProductivityScore() {
  const totalWatchTime = stats.watchTime.educational + stats.watchTime.entertainment;
  const watchTimeScore = totalWatchTime > 0 
    ? (stats.watchTime.educational / totalWatchTime) * 60 
    : 0;
    
  const videoRatioScore = stats.totalVideos > 0 
    ? (stats.educationalCount / stats.totalVideos) * 40 
    : 0;
    
  return Math.round(watchTimeScore + videoRatioScore);
}

// Add debounce function at the top with other utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedUpdateStats = debounce(updateProductivityStats, 300);

const processVideo = async (item) => {
  // Mark as processed
  item.setAttribute('data-processed', 'true');
  stats.totalVideos++;
  
  const isAd = item.tagName.toLowerCase().includes('ad') || 
               item.hasAttribute('id') && item.id.toLowerCase().includes('ad') ||
               item.classList.contains('ytd-promoted-video-renderer');

  const isShort = item.tagName.toLowerCase().includes('reel') || 
                 item.tagName.toLowerCase().includes('shorts') ||
                 item.innerHTML.toLowerCase().includes('shorts');

  const textContent = item.innerText;
  const keyword = shouldFilterOut(textContent);
  
  if (isEducational(textContent)) {
    stats.educationalCount++;
  }

  if ((isAd && !isEducational(textContent)) || isShort || (keyword && !isEducational(textContent))) {
    stats.filteredCount++;
    
    // Add transition effect
    item.style.transition = 'opacity 0.3s ease';
    
    // Create and append overlay with animation
    const overlay = document.createElement('div');
    overlay.className = 'focus-filter-overlay';
    overlay.style.cssText = motivationalOverlayStyle + `
      opacity: 0;
      transform: scale(0.95);
      transition: opacity 0.3s ease, transform 0.3s ease;
    `;

    const message = isAd ? "Focus on content, not ads!" :
                   isShort ? "Think long-term. Skip the Shorts." :
                   getMotivationalMessage(keyword);
    
    overlay.textContent = message;
    
    item.style.position = 'relative';
    item.appendChild(overlay);

    // Hide thumbnail with fade
    const thumbnails = item.querySelectorAll('ytd-channel-renderer img, img#img, yt-image img, ytd-thumbnail img, #thumbnail img');
      thumbnails.forEach(thumbnail => {
      thumbnail.style.transition = 'filter 0.3s ease';
      thumbnail.style.filter = 'blur(6px)';
    });



    // Trigger animations
    await new Promise(resolve => {
      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        overlay.style.transform = 'scale(1)';
        item.style.opacity = '0.3';
        item.style.pointerEvents = 'none';

        setTimeout(() => {
          thumbnails.forEach(thumbnail => {
            thumbnail.style.display = 'none';
          });
          resolve();
        }, 300);
      });
    });
  }
  
  // Use debounced update to prevent too many updates
  debouncedUpdateStats();
};

function applyFilter() {
  if (filterRunning) return;
  filterRunning = true;

  // Use requestAnimationFrame for smooth animations
  requestAnimationFrame(async () => {
    try {
      // Get only unprocessed videos (those without a data-processed attribute)
      const videoItems = document.querySelectorAll(`
        ytd-rich-item-renderer:not([data-processed]), 
        ytd-video-renderer:not([data-processed]), 
        ytd-grid-video-renderer:not([data-processed]),
        ytd-compact-video-renderer:not([data-processed]),
        ytd-compact-playlist-renderer:not([data-processed]),
        ytd-compact-radio-renderer:not([data-processed]),
        ytd-reel-item-renderer:not([data-processed]),
        ytd-shorts:not([data-processed]),
        ytd-in-feed-ad-layout-renderer:not([data-processed]),
        ytd-promoted-video-renderer:not([data-processed]),
        ytd-display-ad-renderer:not([data-processed])
      `);

      // Process videos one by one
      for (const item of Array.from(videoItems)) {
        await processVideo(item);
        // Small delay between videos for smooth visual feedback
        await new Promise(resolve => setTimeout(resolve, 50));
      }

    } catch (error) {
      console.log('Filter application error:', error);
    } finally {
      filterRunning = false;
    }
  });
}

// Modify observer to use Intersection Observer for scroll detection
function initFilter() {
  try {
    // Reset stats when filter is initialized
    stats = {
      filteredCount: 0,
      educationalCount: 0,
      totalVideos: 0,
      watchTime: {
        educational: 0,
        entertainment: 0
      }
    };

    filterRunning = false;
    applyFilter();
    trackVideoWatchTime();

    // Create mutation observer for new content
    const mutationObserver = new MutationObserver(() => {
      if (!filterRunning) {
        applyFilter();
      }
    });

    // Create intersection observer for scroll detection
    const intersectionObserver = new IntersectionObserver((entries) => {
      const processEntries = async () => {
        for (const entry of entries) {
          if (entry.isIntersecting && !entry.target.hasAttribute('data-processed')) {
            await processVideo(entry.target);
          }
        }
      };
      processEntries().catch(error => console.log('Error processing entries:', error));
    }, {
      root: null,
      rootMargin: '100px', // Increased margin for better pre-loading
      threshold: 0.1
    });

    // Observe DOM changes
    mutationObserver.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    // Function to observe new videos
    const observeNewVideos = () => {
      const unprocessedVideos = document.querySelectorAll(`
        ytd-rich-item-renderer:not([data-processed]), 
        ytd-video-renderer:not([data-processed]),
        ytd-grid-video-renderer:not([data-processed])
      `);
      unprocessedVideos.forEach(video => {
        intersectionObserver.observe(video);
      });
    };

    // Observe initial videos
    observeNewVideos();

    // Add observer for new videos being added
    const newVideoObserver = new MutationObserver(observeNewVideos);
    newVideoObserver.observe(document.body, { childList: true, subtree: true });

    return {
      disconnect: () => {
        mutationObserver.disconnect();
        intersectionObserver.disconnect();
        newVideoObserver.disconnect();
      }
    };
  } catch (error) {
    console.log('Init filter error:', error);
    return null;
  }
}

let observer = null;
chrome.storage.sync.get(["distractionFilterEnabled"], result => {
  if (result.distractionFilterEnabled) {
    if (observer) {
      observer.disconnect();
    }
    observer = initFilter();
  }
});

// Modify chrome.storage.onChanged listener to clear stats when filter is disabled
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.distractionFilterEnabled) {
    if (changes.distractionFilterEnabled.newValue) {
      if (observer) {
        observer.disconnect();
      }
      observer = initFilter();
    } else {
      if (observer) {
        observer.disconnect();
        observer = null;
      }

      // Clear all stats from storage
      chrome.storage.local.set({
        videoStats: {
          filteredCount: 0,
          educationalCount: 0,
          totalVideos: 0,
          watchTime: {
            educational: 0,
            entertainment: 0
          },
          educationalPercentage: 0,
          productivityScore: 0,
          lastUpdated: Date.now()
        }
      });

      // Reset stats object
      stats = {
        filteredCount: 0,
        educationalCount: 0,
        totalVideos: 0,
        watchTime: {
          educational: 0,
          entertainment: 0
        }
      };

      // Remove overlays and reset styles
      document.querySelectorAll('.focus-filter-overlay').forEach(overlay => {
        overlay.remove();
      });

      document.querySelectorAll('ytd-rich-item-renderer, ytd-video-renderer, ytd-grid-video-renderer').forEach(item => {
        item.style.opacity = '';
        item.style.pointerEvents = '';
        item.removeAttribute('data-processed');

        const thumbnails = item.querySelectorAll('ytd-channel-renderer img, img#img, yt-image img, ytd-thumbnail img, #thumbnail img');
        thumbnails.forEach(thumbnail => {
          thumbnail.style.display = '';
          thumbnail.style.opacity = '';
        });
      });
    }
  }
});

// Add message listener for toggle updates
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'toggleFilter') {
    if (message.enabled) {
      // Send response before reloading
      sendResponse({ success: true });
      // Reload the page to start fresh with filter enabled
      window.location.reload();
      return true;
    } else {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      
      // Immediately remove all filter-related styles
      const videoSelectors = `
        ytd-rich-item-renderer, 
        ytd-video-renderer, 
        ytd-grid-video-renderer,
        ytd-compact-video-renderer,
        ytd-compact-playlist-renderer,
        ytd-compact-radio-renderer,
        ytd-reel-item-renderer,
        ytd-shorts,
        ytd-in-feed-ad-layout-renderer,
        ytd-promoted-video-renderer,
        ytd-display-ad-renderer
      `;

      // Remove overlays
      document.querySelectorAll('.focus-filter-overlay').forEach(overlay => {
        overlay.remove();
      });

      // Reset all video item styles
      document.querySelectorAll(videoSelectors).forEach(item => {
        item.style.opacity = '';
        item.style.pointerEvents = '';
        item.style.position = '';
        
        // Reset all thumbnail images
        const thumbnails = item.querySelectorAll('ytd-channel-renderer img, img#img, yt-image img, ytd-thumbnail img, #thumbnail img');
        thumbnails.forEach(thumbnail => {
          thumbnail.style.display = '';
        });
      });
      sendResponse({ success: true });
    }
  }
  return true; // Keep the message channel open for async response
});
