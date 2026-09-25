$(document).ready(function() {
    if (!sessionStorage.getItem('archivaWelcomeShown')) {
        alert("Bienvenue sur notre plateforme d'archivage de CERs ! Plongeons ensemble dans les profondeurs de la connaissance.");
        sessionStorage.setItem('archivaWelcomeShown', 'true');
    }
 
    $('.auth-card__form, .modal__form').on('submit', function (event) {
        const $form = $(this);
        let isValid = true;
 
       
        $form.find('.error-message').remove();
        $form.find('.input-error').removeClass('input-error');
 
       
        const $email = $form.find('input[type="email"]');
        if ($email.length && !$email.val().includes('@')) {
            isValid = false;
            $email.addClass('input-error')
                  .after('<p class="error-message">Veuillez entrer une adresse e-mail valide.</p>');
        }
 
       
        $form.find('input[type="text"], input[type="password"], textarea').each(function () {
            const $field = $(this);
            if ($field.val().trim() === '') {
                isValid = false;
                $field.addClass('input-error')
                      .after('<p class="error-message">Ce champ ne peut pas être vide.</p>');
            }
        });
 
        if (!isValid) {
            event.preventDefault();
        }
    });
 
    
    $('<style>.input-error{border:1px solid #e53935 !important;} .error-message{color:#e53935;font-size:0.85em;margin:4px 0 0;}</style>').appendTo('head');
 
    
    $('.cer-section__see-all, #loadMore').on('click', function () {
        const $btn = $(this);
        const $more = $('.cer-section__more, #moreContent');
        $more.slideToggle();
        $btn.text($btn.text().trim() === 'Voir plus' ? 'Cacher' : 'Voir plus');
    });
 
    
    if ($('.ajouter').length) {
        $('.modal').hide();
    }
 
    $('.ajouter').on('click', function () {
        $('.modal').fadeIn();
    });
 
    $('.modal__close').on('click', function () {
        $('.modal').fadeOut();
    });
 
    
    $(window).on('click', function (event) {
        if ($(event.target).is('.modal')) {
            $('.modal').fadeOut();
        }
    });
 
    
    $('.cer-card__favorite').on('click', function () {
        const $btn = $(this);
        $btn.toggleClass('is-favorite');
        const $icon = $btn.find('.cer-card__favorite-icon path');
        $icon.attr('fill', $btn.hasClass('is-favorite') ? 'red' : 'none');
    });
 
});
 