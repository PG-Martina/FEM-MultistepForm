import classes from "./Success.module.scss";
import successIcon from "../../assets/icon-thank-you.svg";

function Success() {
  return (
    <div className={classes.success}>
      <div className={classes.success__content}>
        <img src={successIcon} alt="Decorative image" />
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default Success;
