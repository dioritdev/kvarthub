
export function Auth() {

    const handle__Submit = (e: any) => {
        e.preventDefault()

        let a1 = new FormData(e.target)
        let a2 = Object.fromEntries(a1.entries())

        console.log(a2);
    }

    return (
        <div className="w-[100%] h-[100vh] relative before:content-[''] before:absolute before:w-[50%] before:h-[100%] before:bg-[#DEEAFA] before:top-[0] before:left-[0] flex items-center justify-center flex-col gap-[36px]">
            <div className="relative flex items-center gap-[20px]">
                <svg width="135" height="135" viewBox="0 0 135 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M55.1489 8.25174H27.475V14.1951V60.2565H33.4184V14.1951H55.1489V54.428H61.0923V8.25174H55.1489ZM27.475 74.7435V126.748H33.4184H61.0923V120.805V83.5462H55.1489V120.805H33.4184V74.7435H27.475Z" fill="#354668" />
                    <path d="M80.1094 67.4965L80.1094 64.5248L80.1094 61.5531L77.1377 64.5248L80.1094 67.4965Z" fill="#354668" />
                    <path d="M64.0643 51.4513L61.0926 48.4796L61.0926 54.423L64.0643 51.4513Z" fill="#354668" />
                    <path d="M61.0926 48.4796L64.0643 51.4513L67.036 48.4796L61.0926 48.4796Z" fill="#354668" />
                    <path d="M80.1094 67.4965L77.1377 64.5248L74.166 67.4965L77.1377 70.4682L80.1094 67.4965Z" fill="#354668" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M110.679 30.9832L113.651 33.9549L102.612 44.9938L101.869 44.2509L90.4055 55.7146L91.1484 56.4575L83.0811 64.5248L80.1094 67.4965L80.1094 64.5248L80.1094 61.5531L88.1767 53.4858L88.9196 54.2287L89.2911 54.6002L100.755 43.1365L100.383 42.765L99.6404 42.0221L107.708 33.9549L110.679 30.9832ZM94.6342 14.938L94.6342 20.8814L67.036 48.4796L61.0926 48.4796L94.6342 14.938Z" fill="#354668" />
                    <path d="M61.0922 86.5169L67.0356 86.5169L64.0639 83.5452L61.0922 86.5169Z" fill="#354668" />
                    <path d="M61.0922 86.5169L64.0639 83.5452H61.0922V86.5169Z" fill="#354668" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M61.0922 86.5169L94.6338 120.058L97.6055 117.087L94.6338 114.115L67.0356 86.5169L61.0922 86.5169ZM113.651 101.042L110.679 98.0699L80.109 67.5L77.1373 70.4717L80.109 73.4434L107.707 101.042L113.651 101.042Z" fill="#354668" />
                    <path d="M113.651 101.042L107.707 101.042L110.679 104.013L113.651 101.042Z" fill="#354668" />
                    <line x1="33.4183" y1="28.1251" x2="46.7918" y2="28.1251" stroke="#354668" strokeWidth="1.85731" />
                    <line x1="33.4183" y1="75.6722" x2="45.3058" y2="75.6722" stroke="#354668" strokeWidth="1.85731" />
                    <line x1="46.2337" y1="74.7437" x2="46.2337" y2="101.303" stroke="#354668" strokeWidth="1.85731" />
                    <line x1="45.3051" y1="100.375" x2="55.15" y2="100.375" stroke="#354668" strokeWidth="1.85731" />
                    <line x1="78.8232" y1="100.646" x2="94.0532" y2="85.4165" stroke="#354668" strokeWidth="1.85731" />
                    <path d="M68.8932 8.25174C84.6068 8.25174 99.6768 14.4939 110.788 25.6051C121.899 36.7163 128.141 51.7863 128.141 67.4999C128.141 83.2135 121.899 98.2835 110.788 109.395C99.6769 120.506 84.6069 126.748 68.8933 126.748L68.8933 120.823C83.0356 120.823 96.5985 115.205 106.599 105.205C116.599 95.2052 122.217 81.6422 122.217 67.4999C122.217 53.3577 116.599 39.7947 106.598 29.7946C96.5984 19.7945 83.0354 14.1766 68.8932 14.1766V8.25174Z" fill="#4568AE" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M27.4749 109.606V102.614C27.0572 102.225 26.6457 101.828 26.2406 101.423C17.2437 92.4262 12.1893 80.2238 12.1893 67.5002C12.1892 54.7766 17.2436 42.5741 26.2406 33.5772C26.6456 33.1721 27.0571 32.7751 27.4749 32.3861V25.3946C25.7257 26.7526 24.0539 28.2254 22.4713 29.808C12.4748 39.8046 6.85875 53.3629 6.85876 67.5002C6.85878 81.6375 12.4748 95.1958 22.4714 105.192C24.0539 106.775 25.7257 108.248 27.4749 109.606Z" fill="#4568AE" />
                    <path d="M61.0927 8.25174H70.3803V14.1959H61.0927V8.25174Z" fill="#4568AE" />
                    <rect x="61.1356" y="120.752" width="11.5" height="6" fill="#4568AE" />
                </svg>
                <h1 className="text-[#354668] font-rubik font-[500] text-[115px] leading-[136px]">KvartHub</h1>
            </div>
            <form onSubmit={handle__Submit} className="relative shadow-[0px_0px_20px_0px_#35466833] bg-[#FFFFFF] rounded-[18px] p-[32px] max-w-[365px] w-[100%] flex items-center flex-col">
                <h2 className="text-[#000000] font-rubik font-[600] text-[36px] leading-[42px] mb-[20px]">Супер Админ 😎</h2>
                <input type="email" name="email" placeholder="Логин" className="w-[100%] border border-solid border-[#354668] duration-200 rounded-[6px] p-[16px] focus-within:shadow-[0px_0px_1px_2px_#5581da] focus-within:border-[transparent] outline-none placeholder:text-[#71767D] text-[#71767D] font-rubik font-[400] text-[16px] leading-[18px] caret-[#71767D] mb-[18px]" />
                <input type="password" name="password" placeholder="Пароль" className="w-[100%] border border-solid border-[#354668] duration-200 rounded-[6px] p-[16px] focus-within:shadow-[0px_0px_1px_2px_#5581da] focus-within:border-[transparent] outline-none placeholder:text-[#71767D] text-[#71767D] font-rubik font-[400] text-[16px] leading-[18px] caret-[#71767D] mb-[18px]" />
                <button type="submit" className="text-[#FFFFFF] font-rubik font-[400] text-[14px] leading-[16px] py-[12px] px-[35px] bg-[#4568AE] rounded-[8px]">Войти</button>
            </form>
        </div>
    )
}

