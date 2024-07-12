/*copia del slider de tecnologias*/
let copyTecSlide = document.querySelector(".tec-slide").cloneNode(true);
document.querySelector(".tec").appendChild(copyTecSlide);


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Verifica que todos los campos estén completos
    var isValid = true;
    var formElements = this.elements;

    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].type !== "submit" && !formElements[i].value) {
            isValid = false;
            break;
        }
    }

    var alertBox = document.getElementById('alert');

    if (isValid) {
        // Mostrar mensaje de éxito
        alertBox.classList.remove('d-none', 'alert-danger');
        alertBox.classList.add('alert', 'alert-success');
        alertBox.innerHTML = 'El formulario se ha enviado correctamente. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

        // Reiniciar el formulario
        this.reset();
    } else {
        // Mostrar mensaje de error
        alertBox.classList.remove('d-none', 'alert-success');
        alertBox.classList.add('alert', 'alert-danger');
        alertBox.innerHTML = 'Por favor, completa todos los campos. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Collapse the navbar
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }

        // Scroll smoothly to the section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*proyectos*/
document.addEventListener('DOMContentLoaded', function() {
  var infoButtons = document.querySelectorAll('.info-button');
  var modal = document.getElementById('info-modal');
  var overlay = document.getElementById('overlay');
  var closeButton = document.querySelector('.close-button');
  var modalImage = document.getElementById('modal-image');
  var modalTitle = document.getElementById('modal-title');
  var modalDescription = document.getElementById('modal-description');
  var modalIcons = document.getElementById('modal-icons');
  var modalViewProject = document.getElementById('modal-view-project');
  var modalViewCode = document.getElementById('modal-view-code');

  var projectData = {
    project1: {
      image: './img/proyectos/indri.png',
      title: 'Indri',
      description: 'Página web enfocada en diseño y gestión digital. Contribuí en su implementación junto al equipo de desarrollo y diseño.',
      icons: ['./img/tecnologias/nextjs.png', './img/tecnologias/typescript.png', './img/tecnologias/js.png', './img/tecnologias/html_5.png', './img/tecnologias/tailwindcss.png'],
      viewProject: 'https://indri.pe',
      viewCode: 'https://github.com/zarocknc/duty'
    },
    project2: {
      image: './img/proyectos/pododinamic.png',
      title: 'Pododinamic',
      description: 'Página web enfocada en podología y servicios similares. Contribuí en su creación junto con el equipo de la empresa en la que trabajé.',
      icons: ['./img/tecnologias/astrojs.png', './img/tecnologias/php.png', './img/tecnologias/typescript.png', './img/tecnologias/js.png', './img/tecnologias/html_5.png', './img/tecnologias/tailwindcss.png'],
      viewProject: 'https://www.pododinamic.pe/',
      viewCode: 'https://github.com/Focbri/podo'
    },
    project3: {
      image: './img/proyectos/pointerERP.png',
      title: 'PointerERP',
      description: 'Página web que ofrece software ERP para la gestión empresarial. Contribuí en su implementación junto al equipo de desarrollo y diseño de la empresa.',
      icons: ['./img/tecnologias/astrojs.png', './img/tecnologias/php.png', './img/tecnologias/typescript.png', './img/tecnologias/js.png', './img/tecnologias/html_5.png', './img/tecnologias/tailwindcss.png'],
      viewProject: 'https://pointererp.com',
      viewCode: 'https://github.com/zarocknc/pointerperulandpage'
    },
    project4: {
      image: './img/proyectos/portafolioJoan.png',
      title: 'Mi Portafolio',
      description: 'Página web creada y diseñada por mí para mostrar mis trabajos y poder contactarme.',
      icons: ['./img/tecnologias/bootstrap.png', './img/tecnologias/css_3.png', './img/tecnologias/js.png', './img/tecnologias/html_5.png'],
      viewProject: 'https://pointererp.com',
      viewCode: 'https://github.com/zarocknc/pointerperulandpage'
    }
  };

  infoButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var projectClass = button.classList[1]; // Obtiene la segunda clase del botón (project1, project2, etc.)
      var project = projectData[projectClass];

      if (project) {
        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalViewProject.href = project.viewProject;
        modalViewCode.href = project.viewCode;

        // Clear existing icons
        modalIcons.innerHTML = '';
        // Add new icons
        project.icons.forEach(function(icon) {
          var img = document.createElement('img');
          img.src = icon;
          modalIcons.appendChild(img);
        });
      }

      overlay.style.display = 'block';
      modal.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', function() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == overlay) {
      overlay.style.display = 'none';
      modal.style.display = 'none';
    }
  });
});
