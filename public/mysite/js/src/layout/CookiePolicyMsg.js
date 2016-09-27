import * as Cookies from 'js-cookie'

class CookiePolicyMsg {
  constructor() {
    const $container = $('#CookiePolicyMsg');
    let accepted = Cookies.get('accept_cookies')=='1';
    if(accepted) {
      $container.remove();
      return;
    }
    $('body').prepend($container);
    const $btn = $container.find('.button');
    $btn.click(function(e) {
      e.preventDefault();
      accepted = true;
      $container.slideUp(250);
      Cookies.set('accept_cookies','1',{ expires:90 });
    });
  }

}
export default CookiePolicyMsg;
