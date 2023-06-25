/* eslint-disable no-unused-vars */
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import { toast, Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const PhoneSignin = () => {
    const { loading, setLoading, user } = useContext(AuthContext);
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [showOTP, setShowOTP] = useState(false);
    const navigate = useNavigate();


    const onCaptchVerify = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                },
                auth
            );
        }
    }

    const onSignup = () => {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const fotmatPh = "+" + ph;

        signInWithPhoneNumber(auth, fotmatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOTP(true);
                toast.success("OTP sended successfully!");
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    const onOTPVerify = () => {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                // console.log(res);   
                const oldNumber = res.user?.phoneNumber;
                const phone = oldNumber ? oldNumber.replace("+", "") :null;
                // console.log(phone);
                saveUser(phone);
                setLoading(false);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    // save user to the database 
    const saveUser = (phone) => {
        const user = {
            phone
        };
        fetch('https://e-commerce-task-server-mu.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                
            })
    };
    // console.log(signUpPhone);
    return (
        <section className="bg-[url('https://i.postimg.cc/fLYV4dNv/image-2.webp')] flex items-center justify-center h-screen bg-no-repeat bg-cover bg-center">
            <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>
                {user ? (
                    <h2 className="text-center text-white font-medium text-2xl">
                        👍Login Success
                    </h2>
                ) : (
                    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                        <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                            Welcome to <br /> CODE A PROGRAM
                        </h1>
                        {showOTP ? (
                            <>
                                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                    <BsFillShieldLockFill size={30} />
                                </div>
                                <label
                                    htmlFor="otp"
                                    className="font-bold text-xl text-white text-center"
                                >
                                    Enter your OTP
                                </label>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={6}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                    className="opt-container "
                                ></OtpInput>
                                <button
                                    onClick={onOTPVerify}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                >
                                    {loading && (
                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                    )}
                                    <span>Verify OTP</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                    <BsTelephoneFill size={30} />
                                </div>
                                <label
                                    htmlFor=""
                                    className="font-bold text-xl text-white text-center"
                                >
                                    Verify your phone number
                                </label>
                                <PhoneInput country={"bd"} value={ph} onChange={setPh} />
                                <button
                                    onClick={onSignup}
                                    className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                >
                                    {loading && (
                                        <CgSpinner size={20} className="mt-1 animate-spin" />
                                    )}
                                    <span>Send code via SMS</span>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default PhoneSignin;