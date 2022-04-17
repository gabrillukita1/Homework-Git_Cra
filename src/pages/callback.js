import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setToken } from "../redux/globalSlice";

const CallbackPage = () => {
    const params = new URLSearchParams(window.location.hash.replace("#", "?"));
    const tokenParams = params.get("access_token");
    const dispatch = useDispatch();
    const history = useHistory();
    const accessToken = useSelector((state) => state.global.accessToken)
    console.log(accessToken)

    useEffect(() => {
        dispatch(setToken(tokenParams))
    },
        [dispatch, tokenParams]
    );
    
    useEffect(() => {
        if (accessToken) {
            history.push("/create-playlist");
        }
    }, [accessToken, history]
    );

    return(
        null
    )
}

export default CallbackPage;