/*
* @Author: Mr.Z
* @Date:   2017-06-30 08:32:03
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-13 15:58:20
*/
'use strict';
$(function(){
// --------banner轮播-----------
    var i = 0;
    var Bannertimer = setInterval(function(){move()},4000);
    function move(){
        i++;
        i=i>$('#indexBanner .big_eye_pic li').length-1?0:i;
        $('#indexBanner .big_eye_pic li').eq(i).fadeIn(500).siblings().fadeOut(500)
        $('#indexBanner .big_eye_nav li').eq(i).addClass('on').siblings().removeClass('on');
    }
    $('#indexBanner .big_eye_nav li').hover(
        function(){clearInterval(Bannertimer)},
        function(){Bannertimer = setInterval(function(){move()},4000)}
    );
    $('#indexBanner .big_eye_nav li').click(function(){
        var index = $(this).index();
        i=index;
        $('#indexBanner .big_eye_pic li').eq(index).fadeIn(500).siblings().fadeOut(500)
        $('#indexBanner .big_eye_nav li').eq(index).addClass('on').siblings().removeClass('on');
    })

//---------banner二级导航------------
    $('.index_type_ul li').mouseover(
        function(){
            $(this).find(".nav_type_list").show().end().siblings().find(".nav_type_list").hide();
        })
    $(".index_type_ul").mouseleave(function(event) {
            $('.nav_type_list').css('display','none');
    });

//-------------今日直播---------------
    var pro_con_src='';
    $.each(pro_con_data,function(i,ele){
        pro_con_src+='<li id="'+pro_con_data[i].id+'">'
                        +'<a href="#"><img src="'+pro_con_data[i].src+'" /></a>'
                        +'<p class="p_mun">'+pro_con_data[i].mun+'</p>'
                        +'<p class="box_glay"><a href="#">'+pro_con_data[i].glay+'</a></p>'
                        +'<div class="now_price"><span class="bigfont">'+pro_con_data[i].bigfont+'</span><del>'+pro_con_data[i].del_price+'</del></div>'
                    +'</li>'
    })
    $('.pro_con_in_ul').eq(0).append(pro_con_src);

    var pro_con_src2='';
    $.each(pro_con_data2,function(i,ele){
        pro_con_src2+='<li id="'+pro_con_data2[i].id+'">'
                        +'<a href="#"><img src="'+pro_con_data2[i].src+'" /></a>'
                        +'<p class="p_mun">'+pro_con_data2[i].mun+'</p>'
                        +'<p class="box_glay"><a href="#">'+pro_con_data2[i].glay+'</a></p>'
                        +'<div class="now_price"><span class="bigfont">'+pro_con_data2[i].bigfont+'</span><del>'+pro_con_data2[i].del_price+'</del></div>'
                    +'</li>'
    })
    $('.pro_con_in_ul').eq(1).append(pro_con_src2);

    $('.pro_menu_txt').on('click',function(){
        $('.pro_con_in_ul').eq($(this).index(".pro_menu_txt")).show().siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    })

//--------------精选活动--------------
    var hdjx_src='';
    $.each(hdjx_data,function(i,ele){
        hdjx_src+='<li><img src="'+hdjx_data[i].src+'" /><div class="jxhd_tc"><div class="jxhd_tc_in clearfix"><p>5折起</p><span>立即抢购</span></div></div></li>'
    })
    $('.jxhd_list').append(hdjx_src)
    $('.jxhd_list li').hover(
        function(){
            $('.jxhd_tc').eq($(this).index()).css('display','block');
        },
        function(){
            $('.jxhd_tc').eq($(this).index()).css('display','none');
        }
    );

//-------楼层滚动---------
    function transTo(mun,time){
        $(mun).click(function(){
            // $(this).addClass('color').siblings().removeClass('color');
            var id = $(this).attr('data');
            $('body').animate({
                scrollTop:$('#'+id).offset().top
            },time)
        })
    }
    transTo('#storey_fixed li',600);

//------------隐藏搜索框-------------
    $(window).on('scroll',function(){
        if($(window).scrollTop()>$(window).height()){
            $('#search_fixed').slideDown();
            $('#storey_fixed').show();
        }else{
            $('#search_fixed').slideUp();
            $('#storey_fixed').hide();
        }
    });
    $('.search_fixed_logo').on('click',function(){
        $('html,body').stop().animate({scrollTop:0},800)
    });




































})