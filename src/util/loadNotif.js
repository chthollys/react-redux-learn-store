import { notifActions } from "../store/notificationSlice";

const initalMsg = {
  success: "success",
  error: "error",
  loading: "loading",
};

const loadNotif = async (awaitFn, dispatch, msg = initalMsg) => {
  dispatch(
    notifActions.showNotif({
      status: "loading",
      title: "Loading",
      message: msg.loading,
    })
  );

  try {
    await awaitFn();
    dispatch(
      notifActions.showNotif({
        status: "success",
        title: "Success",
        message: msg.success,
      })
    );
  } catch (error) {
    dispatch(
      notifActions.showNotif({
        status: "error",
        title: "Error",
        message: error.message,
      })
    );
  }

  setTimeout(() => {
    dispatch(notifActions.hideNotif());
  }, 4000);
};

export default loadNotif;
