$(document).ready(function() {
    var open = true;
    $('#SidebarButton').css('transform', 'rotate(180deg)');
    $('.Subject').click(function() {
        $('.Subject').css('font-size', '30px');
        $('.Subject').css('height', '40px');
        $(this).css('font-size', '35px');
        $(this).css('height', '50px');
        var subject = $(this).text();
        var color = $(this).css('color');
        var bgcolor = $(this).parent().css('background-color');
        $('#ContentTitle').text(subject);
        $('#ColorLayer').css('background-color', bgcolor);
    });
    $('#SidebarButton').click(function() {
        if (open) {
            HideSidebar();
        } else {
            ShowSidebar();
        }
        open = !open;
        Rotate($(this), 180);

    });
});


$(window).resize(function() {
    width = $('#Sidebar').width();
    if (width < 240) {
        $('#SidebarButton').hide();
        $('#Sidebar').hide();
        $('#Content').css("width", "100%");
        // HideSidebar();
    } else {
        $('#SidebarButton').show();
        $('#Sidebar').show();
        if (!open) {
            $('#Content').css("width", "75%");
        }
        // ShowSidebar();
    }
});

function Rotate(elem, d) {
    var tr = elem.css('transform');
    var values = tr.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

    $({
        deg: angle
    }).animate({
        deg: d + angle
    }, {
        duration: 300,
        step: function(now) {
            elem.css({
                transform: "rotate(" + now + "deg)"
            });
        }
    });
}

function HideSidebar() {
    $('#Sidebar').animate({
        "marginLeft": "-25%"
    }, function() {
        $('#Content').animate({
            "width": "100%"
        });
    });
}

function ShowSidebar() {
    $('#Content').animate({
        "width": "75%"
    }, function() {
        $('#Sidebar').animate({
            "marginLeft": "0"
        });
    });
}
