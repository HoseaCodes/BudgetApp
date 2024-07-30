import storage from "../config/Storage";

export const handleOnDone = () => {
    storage
        .load({
            key: "loginState",
            autoSync: true,
        }).then((value) => {
            console.log("Return data: ", value)
            setIsFirstLaunch(false)
        }).catch((err) => {
            saveData()
            switch (err.name) {
                case "NotFoundError":
                    console.log("NotFoundError: ", err.message);
                    break;
                case "ExpiredError":
                    console.log("ExpiredError: ", err.message);
                    break;
                default:
                    console.log("Error: ", err.message);
                    break;
            }
        });

}

export const saveData = () => {
    storage.save({
        key: "loginState",
        data: {
            from: "some other site",
            userid: "some userid",
            token: "some token",
        },
        expires: null,
    });
    setIsFirstLaunch(false);
}