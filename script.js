const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Mountain Landscape",
    title: "Majestic Peaks",
    description: "Snow-capped mountains under a clear blue sky",
    category: "nature",
  },
  {
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "New York City",
    title: "Urban Jungle",
    description: "The bustling streets of New York City at night",
    category: "cities",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Portrait Photography",
    title: "Human Emotion",
    description: "Capturing the depth of human expression",
    category: "people",
  },
  {
    src: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Wild Lion",
    title: "King of the Jungle",
    description: "A majestic lion in its natural habitat",
    category: "animals",
  },
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Dense Forest",
    title: "Enchanted Woods",
    description: "Sunlight filtering through ancient trees",
    category: "nature",
  },
  {
    src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Tokyo Streets",
    title: "Neon Dreams",
    description: "Vibrant streets of Tokyo at night",
    category: "cities",
  },
  {
    src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    alt: "Couple on Beach",
    title: "Togetherness",
    description: "A romantic moment captured at sunset",
    category: "people",
  },
  {
    src: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    alt: "African Elephant",
    title: "Gentle Giant",
    description: "An elephant family in the savannah",
    category: "animals",
  },
  {
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    alt: "Waterfall",
    title: "Nature's Power",
    description: "A powerful waterfall in the rainforest",
    category: "nature",
  },
  {
    src: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Eiffel Tower",
    title: "City of Love",
    description: "The iconic Eiffel Tower at golden hour",
    category: "cities",
  },
  {
    src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    alt: "Laughing Child",
    title: "Innocence",
    description: "Pure joy captured in a child's laughter",
    category: "people",
  },
  {
    src: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    alt: "Penguins",
    title: "Antarctic Friends",
    description: "Penguins waddling on the ice",
    category: "animals",
  },
];

const galleryGrid = document.getElementById("galleryGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("imageModal");
const modalImg = document.querySelector(".main-image");
const imageTitle = document.querySelector(".image-title");
const imageDesc = document.querySelector(".image-description");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");
const contactForm = document.getElementById("contactForm");

let currentImageIndex = 0;
let filteredImages = [...galleryImages];

function initGallery() {
  displayGalleryItems(galleryImages);
  setupEventListeners();
}

function displayGalleryItems(images) {
  galleryGrid.innerHTML = "";

  images.forEach((image, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = `gallery-item ${image.category}`;
    galleryItem.dataset.index = index;

    galleryItem.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}" class="gallery-img">
                    <div class="gallery-overlay">
                        <span class="gallery-category">${image.category}</span>
                        <h4 class="gallery-title">${image.title}</h4>
                    </div>
                `;

    galleryGrid.appendChild(galleryItem);
  });
}

function filterGallery(category) {
  if (category === "all") {
    filteredImages = [...galleryImages];
  } else {
    filteredImages = galleryImages.filter((img) => img.category === category);
  }

  displayGalleryItems(filteredImages);
}

function openModal(index) {
  currentImageIndex = index;
  const image = filteredImages[currentImageIndex];

  modalImg.src = image.src;
  modalImg.alt = image.alt;
  imageTitle.textContent = image.title;
  imageDesc.textContent = image.description;

  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function showPrevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
  openModal(currentImageIndex);
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
  openModal(currentImageIndex);
}

function setupEventListeners() {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterGallery(btn.dataset.filter);
    });
  });

  galleryGrid.addEventListener("click", (e) => {
    const galleryItem = e.target.closest(".gallery-item");
    if (galleryItem) {
      const index = parseInt(galleryItem.dataset.index);
      openModal(index);
    }
  });

  closeBtn.addEventListener("click", closeModal);
  prevBtn.addEventListener("click", showPrevImage);
  nextBtn.addEventListener("click", showNextImage);

  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      if (e.key === "ArrowLeft") {
        showPrevImage();
      } else if (e.key === "ArrowRight") {
        showNextImage();
      } else if (e.key === "Escape") {
        closeModal();
      }
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  mobileMenuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    mobileMenuBtn.innerHTML = mainNav.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.getAttribute("href") === "#") return;

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });

        if (mainNav.classList.contains("active")) {
          mainNav.classList.remove("active");
          mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We'll get back to you soon.");
      contactForm.reset();
    });
  }
}

document.addEventListener("DOMContentLoaded", initGallery);
