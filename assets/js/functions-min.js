$(document).ready(function(){$(".nav-toggle").click(function(){$(".nav").toggleClass("open")}),$('a[href^="#"]').click(function(e){var l=$($(this).attr("href"));l.length&&(e.preventDefault(),$("html, body").animate({scrollTop:l.offset().top-15},300)),$(".nav").toggleClass("open")}),$("#full-slide-ocre .prev, #full-slide-ocre .next").click(function(){var e=$(this),l=$("#full-slide-ocre .banner").find(".active"),a=$("#full-slide-ocre .banner").children().index(l),s=$("#full-slide-ocre .banner").children().length;e.hasClass("next")?a<s-1?$("#full-slide-ocre .active").removeClass("active").next().addClass("active"):$("#full-slide-ocre .banner li").removeClass("active").first().addClass("active"):0===a?$("#full-slide-ocre .banner li").removeClass("active").last().addClass("active"):$("#full-slide-ocre .active").removeClass("active").prev().addClass("active")}),$("#full-slide-gris .prev, #full-slide-gris .next").click(function(){var e=$(this),l=$("#full-slide-gris .banner").find(".active"),a=$("#full-slide-gris .banner").children().index(l),s=$("#full-slide-gris .banner").children().length;e.hasClass("next")?a<s-1?$("#full-slide-gris .active").removeClass("active").next().addClass("active"):$("#full-slide-gris .banner li").removeClass("active").first().addClass("active"):0===a?$("#full-slide-gris .banner li").removeClass("active").last().addClass("active"):$("#full-slide-gris .active").removeClass("active").prev().addClass("active")}),$("#full-slide-bleu .prev, #full-slide-bleu .next").click(function(){var e=$(this),l=$("#full-slide-bleu .banner").find(".active"),a=$("#full-slide-bleu .banner").children().index(l),s=$("#full-slide-bleu .banner").children().length;e.hasClass("next")?a<s-1?$("#full-slide-bleu .active").removeClass("active").next().addClass("active"):$("#full-slide-bleu .banner li").removeClass("active").first().addClass("active"):0===a?$("#full-slide-bleu .banner li").removeClass("active").last().addClass("active"):$("#full-slide-bleu .active").removeClass("active").prev().addClass("active")}),$("#full-slide-jaune .prev, #full-slide-jaune .next").click(function(){var e=$(this),l=$("#full-slide-jaune .banner").find(".active"),a=$("#full-slide-jaune .banner").children().index(l),s=$("#full-slide-jaune .banner").children().length;e.hasClass("next")?a<s-1?$("#full-slide-jaune .active").removeClass("active").next().addClass("active"):$("#full-slide-jaune .banner li").removeClass("active").first().addClass("active"):0===a?$("#full-slide-jaune .banner li").removeClass("active").last().addClass("active"):$("#full-slide-jaune .active").removeClass("active").prev().addClass("active")}),$("#full-slide-vert .prev, #full-slide-vert .next").click(function(){var e=$(this),l=$("#full-slide-vert .banner").find(".active"),a=$("#full-slide-vert .banner").children().index(l),s=$("#full-slide-vert .banner").children().length;e.hasClass("next")?a<s-1?$("#full-slide-vert .active").removeClass("active").next().addClass("active"):$("#full-slide-vert .banner li").removeClass("active").first().addClass("active"):0===a?$("#full-slide-vert .banner li").removeClass("active").last().addClass("active"):$("#full-slide-vert .active").removeClass("active").prev().addClass("active")}),$("#full-slide-rouge .prev, #full-slide-rouge .next").click(function(){var e=$(this),l=$("#full-slide-rouge .banner").find(".active"),a=$("#full-slide-rouge .banner").children().index(l),s=$("#full-slide-rouge .banner").children().length;e.hasClass("next")?a<s-1?$("#full-slide-rouge .active").removeClass("active").next().addClass("active"):$("#full-slide-rouge.banner li").removeClass("active").first().addClass("active"):0===a?$("#full-slide-rouge .banner li").removeClass("active").last().addClass("active"):$("#full-slide-rouge .active").removeClass("active").prev().addClass("active")}),$("#full-slide-autre .prev, #full-slide-autre .next").click(function(){var e=$(this),l=$("#full-slide-autre .banner").find(".active"),a=$("#full-slide-autre .banner").children().index(l),s=$("#full-slide-autre .banner").children().length;e.hasClass("next")?a<s-1?$("#full-slide-autre .active").removeClass("active").next().addClass("active"):$("#full-slide-autre .banner li").removeClass("active").first().addClass("active"):0===a?$("#full-slide-autre .banner li").removeClass("active").last().addClass("active"):$("#full-slide-autre .active").removeClass("active").prev().addClass("active")}),$("#full-slide-noirblanc .prev, #full-slide-noirblanc .next").click(function(){var e=$(this),l=$("#full-slide-noirblanc .banner").find(".active"),a=$("#full-slide-noirblanc .banner").children().index(l),s=$("#full-slide-noirblanc .banner").children().length;e.hasClass("next")?a<s-1?$("#full-slide-noirblanc .active").removeClass("active").next().addClass("active"):$("#full-slide-noirblanc .banner li").removeClass("active").first().addClass("active"):0===a?$("#full-slide-noirblanc .banner li").removeClass("active").last().addClass("active"):$("#full-slide-noirblanc .active").removeClass("active").prev().addClass("active")}),$("#three-slide .prev, #three-slide .next").click(function(){var e=$(this),l=$(".slider").find(".back"),a=$(".slider").children().index(l),s=$(".slider").find(".current"),r=$(".slider").children().index(s),i=$(".slider").find(".front"),n=$(".slider").children().index(i),t=$(".slider").children().length;$(".slider").addClass("swap"),setTimeout(function(){e.hasClass("next")?n<t-1&&r<t-1&&a<t-1?($(".back").removeClass("back").next().addClass("back"),$(".current").removeClass("current").next().addClass("current"),$(".front").removeClass("front").next().addClass("front")):n===t-1?($(".back").removeClass("back").next().addClass("back"),$(".current").removeClass("current").next().addClass("current"),$(".slider li").removeClass("front").first().addClass("front")):r===t-1?($(".back").removeClass("back").next().addClass("back"),$(".slider li").removeClass("current").first().addClass("current"),$(".front").removeClass("front").next().addClass("front")):($(".slider li").removeClass("back").first().addClass("back"),$(".current").removeClass("current").next().addClass("current"),$(".front").removeClass("front").next().addClass("front")):0!==a&&0!==r&&0!==n?($(".back").removeClass("back").prev().addClass("back"),$(".current").removeClass("current").prev().addClass("current"),$(".front").removeClass("front").prev().addClass("front")):0===a?($(".slider li").removeClass("back").last().addClass("back"),$(".current").removeClass("current").prev().addClass("current"),$(".front").removeClass("front").prev().addClass("front")):0===r?($(".back").removeClass("back").prev().addClass("back"),$(".slider li").removeClass("current").last().addClass("current"),$(".front").removeClass("front").prev().addClass("front")):($(".back").removeClass("back").prev().addClass("back"),$(".current").removeClass("current").prev().addClass("current"),$(".slider li").removeClass("front").last().addClass("front")),$(".slider").removeClass("swap")},300)})});