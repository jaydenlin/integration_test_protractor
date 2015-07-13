// spec.js
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Protractor Demo App', function() {
    this.timeout(20000);
    beforeEach(function() {

        isAngularSite(false);

    });
    it('should make next slide active', function() {

        browser.get('http://www.rakuten.com.tw');
  
        var initIndexOfSlide = 1;
        var nextIndexOfSlide = 2;
        var firstSlide = element.all(by.css('#rui-time-sale .swiper-slide')).get(initIndexOfSlide);
        browser.actions().mouseMove(firstSlide).click();
        browser.actions().dragAndDrop(
            firstSlide.getLocation(), {
                x: -100,
                y: 0
            }
        ).perform();
        //element.all(by.css('#rui-time-sale .swiper-slide')).get(nextIndexOfSlide).getAttribute('class')
        //console.log(expect(element.all(by.css('#rui-time-sale .swiper-slide')).get(nextIndexOfSlide).getAttribute('class')));
        var nextSlide=element.all(by.css('#rui-time-sale .swiper-slide')).get(nextIndexOfSlide);

        //console.log(expect(next).to.contain==undefined);
        expect(nextSlide.getAttribute('class')).to.eventually.contain("swiper-slide-active");

        //browser.pause();


    });
});
