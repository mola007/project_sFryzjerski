import $ from 'jquery';

class testForClipPath {

    constructor(){
        this.testElement = document.querySelector('.about-us');
        this.aboutUsSection = document.querySelector('.about-us>.site-section'); 
        
       this.areClipPathShapesSupported(); 
 
    }
    //test for clip-path
    makeATest(){   
        let base = 'clipPath',
        prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
        properties = [ base ],
        attribute = 'polygon(0 calc(0% + 5vw), 100% 0, 100% 100%, 0% 100%)',
        i,l;
    
//     // push the prefixed properties into the array of properties.
    for ( i = 0, l = prefixes.length; i < l; i++ ) {
        let prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); 
        properties.push( prefixedProperty );
    }
    // iterate over the properties and see if they pass two tests.
    for (i = 0, l = properties.length; i < l; i++ ) {
        let property = properties[i];
        // First, they need to even support clip-path (IE <= 11 does not)...
        if (this.testElement.style[property] === '' ) {
            //Second, we need to see what happens when we try to create a CSS shape...
            this.testElement.style[property] = attribute;
       
            if (this.testElement.style[property] !== '' ) {
                return true;
            }
        }
    }
   return false;
    }
    //add classes if browser support clip-path property
    areClipPathShapesSupported(){ 
      if (!this.makeATest()) {  
         this.aboutUsSection.classList.remove('site-section--double-padding-at-top-large'); 
         this.aboutUsSection.classList.remove('site-section--larger-padding-at-top');
         this.aboutUsSection.classList.add('site-section--more-padding-at-top');
     }
    } 
}
    
    export default testForClipPath;