window.onload = function (e) {
    liff.init((data) => {
        initializeApp(data);
    });
}

const initializeApp = (data) => {
    const open = () => {
        liff.openWindow({
            url: 'https://line.me'
        });
    }

    const close = () => {
        liff.closeWindow();
    }

    const sendMessage = () => {
        liff.sendMessages([{
            type: 'text',
            text: "You've successfully sent a message! Hooray!"
        }, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    }

    const loadProfile = () => {
        liff.getProfile().then(function (profile) {
            const message = 
                `
                    profile.userId:         ${profile.userId}
                    profile.displayName:    ${profile.displayName}
                    profile.pictureUrl:     ${profile.pictureUrl}
                    profile.statusMessage:  ${profile.statusMessage}
                `;
            window.alert(message);
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    }
}