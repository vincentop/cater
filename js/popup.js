document.getElementById("sendBooking").addEventListener("click", function () {
    swal({
        title: "確定送出預約嗎?",
        icon: "warning",
        buttons: {
            A: {
                text: "取消",
                value: "cancel"
            },
            B: {
                text: "送出預約",
                value: "send"
            }
        }
    }).then((value) => {
        switch (value) {
            case "send":
                swal("感謝", "你的預約已送出!", "success",{button: "確定"});
                break;
            case "cancel":
                swal("預約未送出", {
                    icon: "warning",
                    buttons: false,
                    timer: 1000,
                });
                break;
            default:
                swal("預約未送出", {
                    icon: "warning",
                    buttons: false,
                    timer: 1000,
                });
        }
    });
});


document.getElementById("sendMessage").addEventListener("click", function () {
    swal({
        title: "確定送出訊息嗎?",
        icon: "warning",
        buttons: {
            A: {
                text: "取消",
                value: "cancel"
            },
            B: {
                text: "送出訊息",
                value: "send"
            }
        }
    }).then((value) => {
        switch (value) {
            case "send":
                swal("感謝", "你的訊息已送出!", "success",{button: "確定"});
                break;
            case "cancel":
                swal("訊息未送出", {
                    icon: "warning",
                    buttons: false,
                    timer: 1000,
                });
                break;
            default:
                swal("訊息未送出", {
                    icon: "warning",
                    buttons: false,
                    timer: 1000,
                });
        }
    });
});
