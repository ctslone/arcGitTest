/**
 * Image Lightbox for Jekyll Documentation
 * Click to expand images with optional zoom for tall images
 */

(function() {
  'use strict';
  
  // Create lightbox HTML structure
  function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.id = 'image-lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-overlay"></div>
      <div class="lightbox-content">
        <img class="lightbox-image" src="" alt="">
        <button class="lightbox-close" aria-label="Close">&times;</button>
      </div>
    `;
    document.body.appendChild(lightbox);
    return lightbox;
  }
  
  // Add CSS styles
  function addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      #image-lightbox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
      }
      
      #image-lightbox.active {
        display: block;
      }
      
      .lightbox-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        cursor: pointer;
      }
      
      .lightbox-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        box-sizing: border-box;
        overflow: auto;
      }
      
      .lightbox-image {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
        cursor: default;
        display: block;
      }
      
      .lightbox-image.zoomable {
        cursor: zoom-in;
      }
      
      .lightbox-image.zoomed {
        max-width: none;
        max-height: none;
        cursor: zoom-out;
      }
      
      .lightbox-close {
        position: fixed;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: white;
        font-size: 40px;
        cursor: pointer;
        padding: 0;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        opacity: 0.8;
        transition: opacity 0.2s;
        z-index: 10;
      }
      
      .lightbox-close:hover {
        opacity: 1;
      }
      
      /* Make images clickable */
      img[data-lightbox] {
        cursor: pointer;
        transition: opacity 0.2s;
      }
      
      img[data-lightbox]:hover {
        opacity: 0.9;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Initialize lightbox functionality
  function initLightbox() {
    addStyles();
    const lightbox = createLightbox();
    const overlay = lightbox.querySelector('.lightbox-overlay');
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const content = lightbox.querySelector('.lightbox-content');
    
    let isZoomed = false;
    let isZoomable = false;
    
    // Function to open lightbox
    function openLightbox(imgSrc, imgAlt) {
      lightboxImg.src = imgSrc;
      lightboxImg.alt = imgAlt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      isZoomed = false;
      lightboxImg.classList.remove('zoomed');
      // Clear inline styles from previous image
      lightboxImg.style.removeProperty('width');
      lightboxImg.style.removeProperty('height');
      lightboxImg.style.removeProperty('max-width');
      lightboxImg.style.removeProperty('max-height');
      content.style.alignItems = '';
      
      // Check if image is tall enough for zoom functionality
      lightboxImg.onload = function() {
        if (this.naturalHeight > 3000) {
          isZoomable = true;
          lightboxImg.classList.add('zoomable');
        } else {
          isZoomable = false;
          lightboxImg.classList.remove('zoomable');
        }
      };
    }
    
    // Function to close lightbox
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      isZoomed = false;
      isZoomable = false;
      lightboxImg.classList.remove('zoomed', 'zoomable');
      // Clear image after transition
      setTimeout(() => {
        lightboxImg.src = '';
        content.scrollTop = 0;
        content.scrollLeft = 0;
      }, 300);
    }
    
    // Function to toggle zoom for tall images
    function toggleZoom(e) {
      if (!isZoomable) return;
      
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation(); // Stop ALL other click handlers
      
      isZoomed = !isZoomed;
      
      if (isZoomed) {
        lightboxImg.classList.add('zoomed');
        
        // Use setProperty with important to override CSS
        lightboxImg.style.setProperty('width', '50%', 'important');
        lightboxImg.style.setProperty('max-width', 'none', 'important');
        lightboxImg.style.setProperty('max-height', 'none', 'important');
        // Align content to top so image starts from top
        content.style.alignItems = 'flex-start';
      } else {
        lightboxImg.classList.remove('zoomed');
        // Remove important styles individually
        lightboxImg.style.removeProperty('width');
        lightboxImg.style.removeProperty('height');
        lightboxImg.style.removeProperty('max-width');
        lightboxImg.style.removeProperty('max-height');
        content.style.alignItems = '';
        content.scrollTop = 0;
        content.scrollLeft = 0;
      }
    }
    
    // Add click handlers to all images in the content
    const images = document.querySelectorAll('img:not(.no-lightbox)');
    images.forEach(img => {
      // Skip small images (like icons)
      img.addEventListener('load', function() {
        if (this.naturalWidth > 200) {
          this.setAttribute('data-lightbox', 'true');
          this.addEventListener('click', function(e) {
            e.preventDefault();
            openLightbox(this.src, this.alt);
          });
        }
      });
      
      // Handle already loaded images
      if (img.complete && img.naturalWidth > 200) {
        img.setAttribute('data-lightbox', 'true');
        img.addEventListener('click', function(e) {
          e.preventDefault();
          openLightbox(this.src, this.alt);
        });
      }
    });
    
    // Click on image to toggle zoom (for tall images only)
    // Use capture phase to ensure we handle the click before other listeners
    lightboxImg.addEventListener('click', toggleZoom, true);
    
    // Close on overlay click
    overlay.addEventListener('click', closeLightbox);
    
    // Close on content area click (but not on image)
    content.addEventListener('click', function(e) {
      if (e.target === content) {
        closeLightbox();
      }
    });
    
    // Close on close button click
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
})();