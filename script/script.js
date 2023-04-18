document.addEventListener('DOMContentLoaded', ()=> {
    const getButon = document.querySelectorAll('.header__bottom_white'),
        getModalContainer = document.querySelector('.modal'),
        getModal = document.querySelector('.modal-window'),
        getVideoBtn = document.querySelectorAll('.header__bottom_black'),
        getVideoContainer = document.querySelector('.modalVideo'),
        getVideo = document.querySelector('.modal-windowVideo'),
        overflow = document.querySelector('.overflow'),
        overflowVideo = document.querySelector('.overflowVideo');
    function hideModal() {
        getModalContainer.classList.add('hide')
        getModalContainer.classList.remove('active')
        document.querySelector('body').style.overflow = ''
    }
    function showModal() {
        getModalContainer.classList.add('active')
        getModalContainer.classList.remove('hide')
        getModal.classList.add('animate');
        getModal.classList.remove('anti');
        document.querySelector('body').style.overflow = 'hidden'
    }
    function hideModalVideo() {
        getVideoContainer.classList.add('hide')
        getVideoContainer.classList.remove('active')
        document.querySelector('body').style.overflow = ''
    }
    function showModalVideo() {
        getVideoContainer.classList.add('active')
        getVideoContainer.classList.remove('hide')
        getVideo.classList.add('animate');
        getVideo.classList.remove('anti');
        document.querySelector('body').style.overflow = 'hidden'
    }

    //toogle модалки видео
    getVideoBtn.forEach(item=>{
        item.addEventListener('click', () => {
            if (getVideoContainer.classList.contains('hide')) {
                showModalVideo()
            }
            else {
                setTimeout(hideModalVideo, 400)
                getVideo.classList.add('anti')
                getVideo.classList.remove('animate')
            }
        })
    })

    //toogle модалки на кнопку
    getButon.forEach(item=>{
        item.addEventListener('click', () => {
            if (getModalContainer.classList.contains('hide')) {
                showModal()
            }
            else {
                setTimeout(hideModal, 400)
                getModal.classList.add('anti')
                getModal.classList.remove('animate')
            }
        })
    })

    //скрытие модалки на подложку 
    getModalContainer.addEventListener('click', (e)=>{
        if (e.target == overflow) {
            setTimeout(hideModal, 400)
            getModal.classList.add('anti')
            getModal.classList.remove('animate')
        }
    })

    //скрытие модалки видео на подложку
    getVideoContainer.addEventListener('click', (e)=>{
        if (e.target == overflowVideo) {
            setTimeout(hideModalVideo, 400)
            getVideo.classList.add('anti')
            getVideo.classList.remove('animate')
        }
    })

    //Скрытие модалок на ESCAPE
    document.addEventListener('keydown', (e)=> {
        if (e.code === 'Escape') {
            setTimeout(hideModalVideo, 400)
            setTimeout(hideModal, 400)
            getVideo.classList.add('anti')
            getVideo.classList.remove('animate')
            getModal.classList.add('anti')
            getModal.classList.remove('animate')
        }
    })



    //Блок с проэктами
    const buttonSort = document.querySelectorAll('.nav_item'),
        allItem = document.querySelectorAll('.allin'),
        webItem = document.querySelectorAll('.webui'),
        mobileItem = document.querySelectorAll('.mobil'),
        brandItem = document.querySelectorAll('.branding');

    //Удаление класса активности с других кнопок
    function removeActiveClass() {
        buttonSort.forEach(item=>{
            item.classList.remove('nav_item_active')
        })
    }

    //
    function removePictureClass() {
        allItem.forEach(item=>{
            item.classList.remove('show')
        })
    }

    //Смена классов активности кнопок и картинок
    buttonSort.forEach(item=>{
        item.addEventListener('click', ()=>{
            removeActiveClass()
            item.classList.add('nav_item_active')
            if (item.classList.contains('web')) {
                removePictureClass()
                webItem.forEach(ite=>{
                    ite.classList.add('show')
                })
            }
            else if (item.classList.contains('mobile')) {
                removePictureClass()
                mobileItem.forEach(ite=>{
                    ite.classList.add('show')
                })
            }
            else if (item.classList.contains('brand')) {
                removePictureClass()
                brandItem.forEach(ite=>{
                    ite.classList.add('show')
                })
            }
            if (item.classList.contains('all')) {
                allItem.forEach(ite=>{
                    ite.classList.add('show')
                })
            }
        })
    })



    //Блок feedback

    const buttonSlider = document.querySelectorAll('.comment__scroll span'),
        buttonFeed = document.querySelector('.comment__scroll'),
        feedSlider = document.querySelector('.fedwrap');


    //feed переключение комментариев
    buttonSlider.forEach(item=>{
        item.addEventListener('click', (e)=>{
            buttonSlider.forEach(e=>{
                e.classList.remove('active')
            })
            item.classList.add('active')
            if (e.target.classList.contains("first")) {
                feedSlider.style.transform = 'translateY(0%)'}
            else if (e.target.classList.contains("second")) {
                feedSlider.style.transform = 'translateY(-100%)'}
            else if (e.target.classList.contains("third")) {
                feedSlider.style.transform = 'translateY(-200%)'}
        })
    })




    //Blog секция
    const buttonsWrapper = document.querySelector(".blogg__scroll");
    const slides = document.querySelector(".blogg__grid"),
        buttonBlog = document.querySelectorAll('.blogg__scroll span');

    // полное переключение слайдеров
    buttonBlog.forEach(item=>{
        item.addEventListener('click', (e)=>{
            buttonBlog.forEach(e=>{
                e.classList.remove('active')
            })
            item.classList.add('active')
            if (e.target.classList.contains("first")) {
                slides.style.transform = "translateX(0%)";}
            else if (e.target.classList.contains("second")) {
                slides.style.transform = "translateX(-100%)";}
            else if (e.target.classList.contains("third")) {
                slides.style.transform = "translateX(-200%)";}
        })
    })



    //hamburger
    const hamburgerButton = document.querySelector('.hamburger'),
        hamburgerMenu = document.querySelector('.hamburger__menu'),
        hamburgerClose = document.querySelector('.hamburger__close'),
        hamburgerNav = document.querySelector('.hamburger__menu nav'),
        hamburgerLink = document.querySelectorAll('.hamburger__menu a')

    //прячем гамбургер
    function hideHamburger() {
        setTimeout((function(){hamburgerMenu.classList.remove('show__hamburger')}), 350);
        setTimeout((function(){hamburgerNav.classList.remove('hide_hamburger')}), 350);
        hamburgerNav.classList.add('hide_hamburger');
        document.querySelector('body').style.overflow = ''
    }
    //показываем гамбургер
    function showHamburger(){
        hamburgerMenu.classList.add('show__hamburger');
        hamburgerNav.classList.add('show_hamburger')
        setTimeout(function(){hamburgerNav.classList.remove('show_hamburger')},500)
        document.querySelector('body').style.overflow = 'hidden'
    }


    hamburgerButton.addEventListener('click', ()=>{
        showHamburger()
    })

    hamburgerClose.addEventListener('click', ()=>{
        hideHamburger()
    })

    //прячем гамбургер на ссылку
    hamburgerLink.forEach(item=>{
        item.addEventListener('click', ()=>{
            hideHamburger()
        })
    })

    //прячем гамбургер на подложку
    hamburgerMenu.addEventListener('click', (e)=>{
        if (e.target === hamburgerMenu) {
            hideHamburger()
        }
    })
})