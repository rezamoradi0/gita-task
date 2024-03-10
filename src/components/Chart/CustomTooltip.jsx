const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div dir="rtl" className="rounded-lg p-4 dark:bg-primary-dark">
        <p className="flex items-center justify-between">
          {" "}
          <span>تاریخ : {label}</span> <span>|</span>{" "}
          <span> تعداد: {payload[0].value}</span>
        </p>
        <p className="desc">میزان ورود های کاربر به سایت</p>
      </div>
    );
  }

  return null;
};
export default CustomTooltip;
