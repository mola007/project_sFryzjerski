import $ from 'jquery';

class MobileMenu{
    constructor(){
        this.siteNav = $('.site-nav');
        this.menuIcon = $('.header__menu-icon');

       
        this.events();
        
    }

events(){
   this.menuIcon.click(this.toggleTheMenu.bind(this));
}

toggleTheMenu(){
     this.siteNav.toggleClass('site-nav--is-visible');
     this.menuIcon.toggleClass('header__menu-icon--open')


}
}


export default MobileMenu;