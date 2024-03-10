const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div dir="rtl" className="dark:bg-primary-dark p-4 rounded-lg">
          <p className="flex justify-between items-center"> <span>تاریخ : {label}</span> <span>|</span> <span> تعداد: {payload[0].value}</span></p>
          <p className="desc">میزان ورود های کاربر به سایت</p>
        </div>
      );
    }
  
    return null;
  };
   export default CustomTooltip;