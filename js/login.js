/*
* @Author: Marte
* @Date:   2017-07-12 09:29:37
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-12 12:53:09
*/

'use strict';
$(function(){
    $('.login_r_fixed').hover(
        function(){$('.login_ewm,em').show()},
        function(){$('.login_ewm,em').hide()}
    )

    $('#radio1').click(function(){
        $('.mc').eq(0).show();
        $('.mc').eq(1).hide();
    })
    $('#radio2').click(function(){
        $('.mc').eq(1).show();
        $('.mc').eq(0).hide();
    })

})