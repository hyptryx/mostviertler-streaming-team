export function playProduct(animation, user = "Harald") {

    window.MR.queue.add({

        type: animation,
        user: user

    });

}