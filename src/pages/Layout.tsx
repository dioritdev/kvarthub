import { Link } from "react-router-dom"

export function Layout() {
    return (
        <div className="w-[100%] h-[100vh] flex">
            <div className="max-w-[220px] w-[100%] bg-[#354668] flex flex-col">
                <div className="flex items-center py-[18px] justify-center gap-[6px] border-b-[0.5px] border-solid border-b-[#DEEAFA]">
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.5463 2.56714H8.93665V4.4162V18.7464H10.7857V4.4162H17.5463V16.9331H19.3954V2.56714H17.5463ZM8.93665 23.2535V39.4327H10.7857H19.3954V37.5837V25.9921H17.5463V37.5837H10.7857V23.2535H8.93665Z" fill="white" />
                        <path d="M25.3118 20.9989L25.3118 20.0744V19.1499L24.3872 20.0744L25.3118 20.9989Z" fill="white" />
                        <path d="M20.3199 16.0071L19.3954 15.0826L19.3954 16.9316L20.3199 16.0071Z" fill="white" />
                        <path d="M19.3954 15.0826L20.3199 16.0071L21.2445 15.0826L19.3954 15.0826Z" fill="white" />
                        <path d="M25.3118 20.9989L24.3872 20.0744L23.4627 20.9989L24.3872 21.9234L25.3118 20.9989Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.8224 9.63923L35.7469 10.5638L32.3126 13.9981L32.0815 13.767L28.515 17.3334L28.7461 17.5646L26.2363 20.0744L25.3118 20.9989L25.3118 20.0744V19.1499L27.8216 16.64L28.0527 16.8712L28.1683 16.9867L31.7348 13.4203L31.6192 13.3047L31.3881 13.0736L33.8979 10.5638L34.8224 9.63923ZM29.8306 4.6474L29.8306 6.49646L21.2445 15.0826L19.3954 15.0826L29.8306 4.6474Z" fill="white" />
                        <path d="M19.3954 26.9163L21.2444 26.9163L20.3199 25.9918L19.3954 26.9163Z" fill="white" />
                        <path d="M19.3954 26.9163L20.3199 25.9918H19.3954V26.9163Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.3954 26.9163L29.8305 37.3515L30.7551 36.4269L29.8305 35.5024L21.2444 26.9163L19.3954 26.9163ZM35.7469 31.4351L34.8224 30.5106L25.3117 20.9999L24.3872 21.9245L25.3117 22.849L33.8978 31.4351L35.7469 31.4351Z" fill="white" />
                        <path d="M35.7469 31.4351L33.8978 31.4351L34.8224 32.3596L35.7469 31.4351Z" fill="white" />
                        <line x1="10.7856" y1="8.7499" x2="14.9463" y2="8.7499" stroke="white" strokeWidth="0.57783" />
                        <line x1="10.7856" y1="23.5424" x2="14.484" y2="23.5424" stroke="white" strokeWidth="0.57783" />
                        <line x1="14.7727" y1="23.2536" x2="14.7727" y2="31.5166" stroke="white" strokeWidth="0.57783" />
                        <line x1="14.4838" y1="31.2277" x2="17.5466" y2="31.2277" stroke="white" strokeWidth="0.57783" />
                        <line x1="24.9117" y1="31.3121" x2="29.6499" y2="26.5739" stroke="white" strokeWidth="0.57783" />
                        <path d="M21.8223 2.56714C26.711 2.56714 31.3994 4.50916 34.8563 7.96597C38.3131 11.4228 40.2551 16.1112 40.2551 20.9999C40.2551 25.8886 38.3131 30.577 34.8563 34.0339C31.3995 37.4907 26.711 39.4327 21.8224 39.4327L21.8224 37.5894C26.2222 37.5894 30.4418 35.8416 33.5529 32.7305C36.664 29.6193 38.4118 25.3997 38.4118 20.9999C38.4118 16.6001 36.664 12.3805 33.5529 9.26936C30.4417 6.15823 26.2221 4.41042 21.8223 4.41042V2.56714Z" fill="#99BCE3" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.93662 34.0994V31.9243C8.80665 31.8033 8.67863 31.6797 8.55262 31.5537C5.75357 28.7547 4.18108 24.9584 4.18108 20.9999C4.18107 17.0415 5.75356 13.2451 8.5526 10.4461C8.67861 10.3201 8.80664 10.1966 8.93662 10.0755V7.90039C8.39242 8.32291 7.8723 8.7811 7.37995 9.27345C4.2699 12.3835 2.5227 16.6016 2.52271 20.9999C2.52271 25.3982 4.26992 29.6163 7.37998 32.7264C7.87232 33.2187 8.39243 33.6769 8.93662 34.0994Z" fill="#99BCE3" />
                        <path d="M19.3955 2.56714H22.285V4.41642H19.3955V2.56714Z" fill="#99BCE3" />
                        <rect x="19.4088" y="37.5671" width="3.57778" height="1.86667" fill="#99BCE3" />
                    </svg>
                    <h1 className="text-[#FFFFFF] font-rubik font-[500] text-[32px] leading-[37px]">KvartHub</h1>
                </div>
                <div className="h-[100%] flex flex-col">
                    <div className="flex flex-col items-center pt-[16px]">
                        <div className="border border-solid border-[#FFFFFF] rounded-[50%] max-w-[90px] min-w-[90px] w-[90px] max-h-[90px] min-h-[90px] h-[90px] overflow-hidden mb-[8px]">
                            <img src="/assets/img/profile.png" alt="profile" className="w-[100%] h-[100%]" />
                        </div>
                        <h2 className="text-[#FFFFFF] font-rubik font-[400] text-[16px] leading-[18px] mb-[4px]">Prosto Roma</h2>
                        <Link to="/" className="text-[#99BCE3] underline font-rubik font-[400] text-[16px] leading-[18px] mb-[16px]">gulamov.c137@gmail.com</Link>
                    </div>
                    <div>
                        <Link to="/" className="flex items-center gap-[5px] py-[6px] px-[8px] cursor-pointer hover:bg-[#435883] hover:shadow-[inset_3px_0px_#99BCE3] duration-200">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 7.49999L10 1.66666L17.5 7.49999V16.6667C17.5 17.1087 17.3244 17.5326 17.0118 17.8452C16.6993 18.1577 16.2754 18.3333 15.8333 18.3333H4.16667C3.72464 18.3333 3.30072 18.1577 2.98816 17.8452C2.67559 17.5326 2.5 17.1087 2.5 16.6667V7.49999Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.5 18.3333V10H12.5V18.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-[#FFFFFF] font-rubik font-[400] text-[16px] leading-[18px]">компании</p>
                        </Link>
                        <Link to="/" className="flex items-center gap-[5px] py-[6px] px-[8px] cursor-pointer hover:bg-[#435883] hover:shadow-[inset_3px_0px_#99BCE3] duration-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_611_1764)">
                                    <path d="M16.1667 19.5V17.8333C16.1667 16.9493 15.8155 16.1014 15.1904 15.4763C14.5653 14.8512 13.7174 14.5 12.8334 14.5H6.16671C5.28265 14.5 4.43481 14.8512 3.80968 15.4763C3.18456 16.1014 2.83337 16.9493 2.83337 17.8333V19.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.49996 11.1667C11.3409 11.1667 12.8333 9.67428 12.8333 7.83333C12.8333 5.99238 11.3409 4.5 9.49996 4.5C7.65901 4.5 6.16663 5.99238 6.16663 7.83333C6.16663 9.67428 7.65901 11.1667 9.49996 11.1667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21.1666 19.5V17.8333C21.1661 17.0948 20.9203 16.3773 20.4678 15.7936C20.0153 15.2099 19.3817 14.793 18.6666 14.6083" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.3334 4.60834C16.0504 4.79192 16.6859 5.20892 17.1397 5.7936C17.5936 6.37827 17.8399 7.09736 17.8399 7.8375C17.8399 8.57765 17.5936 9.29674 17.1397 9.88141C16.6859 10.4661 16.0504 10.8831 15.3334 11.0667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_611_1764">
                                        <rect width="20" height="20" fill="white" transform="translate(2 2)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-[#FFFFFF] font-rubik font-[400] text-[16px] leading-[18px]">сотрудники</p>
                        </Link>
                        <Link to="/" className="flex items-center gap-[5px] py-[6px] px-[8px] cursor-pointer hover:bg-[#435883] hover:shadow-[inset_3px_0px_#99BCE3] duration-200">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91286 16.7538 9.16667 15.8333 9.16667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.83337 9.16667V5.83334C5.83337 4.72827 6.27236 3.66846 7.05376 2.88706C7.83516 2.10566 8.89497 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10566 12.9463 2.88706C13.7277 3.66846 14.1667 4.72827 14.1667 5.83334V9.16667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-[#FFFFFF] font-rubik font-[400] text-[16px] leading-[18px]">сотрудники</p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-[5px] py-[6px] px-[8px] cursor-pointer mt-auto mb-[16px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 19.5H6.16667C5.72464 19.5 5.30072 19.3244 4.98816 19.0118C4.67559 18.6993 4.5 18.2754 4.5 17.8333V6.16667C4.5 5.72464 4.67559 5.30072 4.98816 4.98816C5.30072 4.67559 5.72464 4.5 6.16667 4.5H9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.3334 16.1666L19.5 12L15.3334 7.83331" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19.5 12H9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-[#FFFFFF] font-rubik font-[400] text-[16px] leading-[18px]">Выйти</p>
                    </div>
                </div>
            </div>
            <div className="w-[100%] bg-[#F3F8FA] flex flex-col px-[16px]">
                <div className="flex items-center border-b-[0.5px] border-solid border-b-[#71767D] py-[17px]">
                    <button className="p-[12px] border-[2px] border-solid border-[#4568AE] rounded-[8px]">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6667 8.5H3.33337" stroke="#4568AE" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.00004 13.1667L3.33337 8.50001L8.00004 3.83334" stroke="#4568AE" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <h2 className="text-[#212832] font-rubik font-[600] text-[32px] leading-[37px] ml-[8px]">Компании</h2>
                    <button className="text-[#FFFFFF] font-rubik font-[400] text-[14px] leading-[16px] bg-[#4568AE] p-[12px] flex items-center gap-[8px] rounded-[8px] ml-auto">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.83334V13.1667" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.33325 8.5H12.6666" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Добавить компанию
                    </button>
                </div>
                <div className="w-[100%] h-[100%]">
                    <div className="flex flex-col h-[100%] w-[100%]">
                        <div className="flex items-center gap-[12px] pt-[16px] pb-[12px]">
                            <div className="flex items-center border-b-[2px] border-solid border-b-[#DEDEDE] w-[max-content]">
                                <button className="text-[#354668] font-rubik font-[400] text-[16px] leading-[18px] w-[146px] border-b-[2px] border-solid border-b-[#354668] flex items-center justify-center py-[10px]">Таблица </button>
                                <button className="text-[#354668] font-rubik font-[400] text-[16px] leading-[18px] w-[146px] border-b-[2px] border-solid border-b-[transparent] flex items-center justify-center py-[10px]">Карточки </button>
                            </div>
                            <div className="border border-solid border-[#DEEAFA] rounded-[8px] p-[4px] flex items-center gap-[2px]">
                                <button className="text-[#FFFFFF] font-rubik font-[400] text-[12px] leading-[14px] py-[8px] px-[7px] bg-[#4568AE] rounded-[4px] flex items-center gap-[5px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4L4 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 4L12 12" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Активные
                                </button>
                                <button>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 3.33334V12.6667" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.33337 8H12.6667" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <input type="text" placeholder="Плейсхолдер" className="text-[#71767D] placeholder:text-[#71767D] font-rubik font-[400] text-[12px] leading-[11px] p-[7px] py-[9px] outline-none rounded-[5px] w-[375px]" />
                                <button>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.0001 14L11.1001 11.1" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4L4 12" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 4L12 12" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <button className="p-[12px] rounded-[8px] border-[2px] border-solid border-[#4568AE] ml-auto">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_611_1840)">
                                        <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#4568AE" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.9334 9.99999C12.8447 10.2011 12.8182 10.4241 12.8574 10.6404C12.8966 10.8566 12.9997 11.0562 13.1534 11.2133L13.1934 11.2533C13.3174 11.3772 13.4157 11.5242 13.4828 11.6861C13.5499 11.8479 13.5845 12.0214 13.5845 12.1967C13.5845 12.3719 13.5499 12.5454 13.4828 12.7072C13.4157 12.8691 13.3174 13.0162 13.1934 13.14C13.0696 13.264 12.9225 13.3623 12.7607 13.4294C12.5988 13.4965 12.4253 13.531 12.2501 13.531C12.0749 13.531 11.9014 13.4965 11.7395 13.4294C11.5776 13.3623 11.4306 13.264 11.3067 13.14L11.2667 13.1C11.1096 12.9463 10.9101 12.8432 10.6938 12.804C10.4775 12.7648 10.2545 12.7912 10.0534 12.88C9.85624 12.9645 9.68807 13.1048 9.56962 13.2837C9.45117 13.4625 9.3876 13.6721 9.38675 13.8867V14C9.38675 14.3536 9.24627 14.6928 8.99622 14.9428C8.74618 15.1928 8.40704 15.3333 8.05341 15.3333C7.69979 15.3333 7.36065 15.1928 7.11061 14.9428C6.86056 14.6928 6.72008 14.3536 6.72008 14V13.94C6.71492 13.7193 6.64349 13.5053 6.51509 13.3258C6.38668 13.1463 6.20724 13.0095 6.00008 12.9333C5.799 12.8446 5.57595 12.8181 5.35969 12.8573C5.14343 12.8965 4.94387 12.9996 4.78675 13.1533L4.74675 13.1933C4.62292 13.3173 4.47587 13.4156 4.314 13.4827C4.15214 13.5498 3.97864 13.5844 3.80341 13.5844C3.62819 13.5844 3.45469 13.5498 3.29283 13.4827C3.13096 13.4156 2.98391 13.3173 2.86008 13.1933C2.73611 13.0695 2.63777 12.9224 2.57067 12.7606C2.50357 12.5987 2.46903 12.4252 2.46903 12.25C2.46903 12.0748 2.50357 11.9013 2.57067 11.7394C2.63777 11.5775 2.73611 11.4305 2.86008 11.3067L2.90008 11.2667C3.05377 11.1095 3.15687 10.91 3.19608 10.6937C3.2353 10.4775 3.20882 10.2544 3.12008 10.0533C3.03557 9.85614 2.89525 9.68798 2.71639 9.56953C2.53753 9.45108 2.32794 9.38751 2.11341 9.38666H2.00008C1.64646 9.38666 1.30732 9.24618 1.05727 8.99613C0.807224 8.74608 0.666748 8.40695 0.666748 8.05332C0.666748 7.6997 0.807224 7.36056 1.05727 7.11051C1.30732 6.86047 1.64646 6.71999 2.00008 6.71999H2.06008C2.28074 6.71483 2.49475 6.6434 2.67428 6.515C2.85381 6.38659 2.99056 6.20715 3.06675 5.99999C3.15549 5.79891 3.18196 5.57586 3.14275 5.3596C3.10354 5.14333 3.00044 4.94378 2.84675 4.78666L2.80675 4.74666C2.68278 4.62283 2.58443 4.47577 2.51734 4.31391C2.45024 4.15205 2.4157 3.97854 2.4157 3.80332C2.4157 3.6281 2.45024 3.4546 2.51734 3.29274C2.58443 3.13087 2.68278 2.98382 2.80675 2.85999C2.93058 2.73602 3.07763 2.63768 3.23949 2.57058C3.40136 2.50348 3.57486 2.46894 3.75008 2.46894C3.9253 2.46894 4.0988 2.50348 4.26067 2.57058C4.42253 2.63768 4.56958 2.73602 4.69341 2.85999L4.73341 2.89999C4.89053 3.05368 5.09009 3.15678 5.30636 3.19599C5.52262 3.23521 5.74567 3.20873 5.94675 3.11999H6.00008C6.19726 3.03548 6.36543 2.89516 6.48388 2.7163C6.60233 2.53744 6.66589 2.32785 6.66675 2.11332V1.99999C6.66675 1.64637 6.80722 1.30723 7.05727 1.05718C7.30732 0.807132 7.64646 0.666656 8.00008 0.666656C8.3537 0.666656 8.69284 0.807132 8.94289 1.05718C9.19294 1.30723 9.33341 1.64637 9.33341 1.99999V2.05999C9.33427 2.27451 9.39784 2.48411 9.51629 2.66297C9.63474 2.84183 9.8029 2.98215 10.0001 3.06666C10.2012 3.1554 10.4242 3.18187 10.6405 3.14266C10.8567 3.10345 11.0563 3.00035 11.2134 2.84666L11.2534 2.80666C11.3772 2.68269 11.5243 2.58434 11.6862 2.51724C11.848 2.45014 12.0215 2.41561 12.1967 2.41561C12.372 2.41561 12.5455 2.45014 12.7073 2.51724C12.8692 2.58434 13.0163 2.68269 13.1401 2.80666C13.264 2.93049 13.3624 3.07754 13.4295 3.2394C13.4966 3.40127 13.5311 3.57477 13.5311 3.74999C13.5311 3.92521 13.4966 4.09871 13.4295 4.26058C13.3624 4.42244 13.264 4.56949 13.1401 4.69332L13.1001 4.73332C12.9464 4.89044 12.8433 5.09 12.8041 5.30626C12.7649 5.52253 12.7913 5.74558 12.8801 5.94666V5.99999C12.9646 6.19717 13.1049 6.36533 13.2838 6.48379C13.4626 6.60224 13.6722 6.6658 13.8867 6.66666H14.0001C14.3537 6.66666 14.6928 6.80713 14.9429 7.05718C15.1929 7.30723 15.3334 7.64637 15.3334 7.99999C15.3334 8.35361 15.1929 8.69275 14.9429 8.9428C14.6928 9.19285 14.3537 9.33332 14.0001 9.33332H13.9401C13.7256 9.33418 13.516 9.39774 13.3371 9.51619C13.1582 9.63465 13.0179 9.80281 12.9334 9.99999Z" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_611_1840">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <div className="w-[100%] h-[100%] bg-[#FFFFFF] rounded-[10px] shadow-[0px_0px_20px_0px_#35466833] p-[8px] flex flex-col gap-[4px]">
                            <div className="bg-[#DEEAFA] h-[44px] flex rounded-[8px]">
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-r-[1.3px] border-solid border-r-[#9EAEBC] px-[10px] pr-[15px] flex items-center max-w-[40px] w-[100%]">#</div>
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">Название</div>
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">Инн компании</div>
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">Адрес компании</div>
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">Тел.номер</div>
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">Общий статус</div>
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">Дата до </div>
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[transparent] px-[10px] max-w-[230px] w-[100%] flex items-center">Действие</div>
                            </div>
                            <div className="h-[44px] flex rounded-[8px]">
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-r-[1.3px] border-solid border-r-[#9EAEBC] px-[10px] pr-[15px] flex items-center max-w-[40px] w-[100%]">
                                    <div className="relative select-none groupChecking">
                                        <input type="checkbox" id="check1" className="hidden" />
                                        <label htmlFor="check1" className="w-[20px] h-[20px] block cursor-pointer after:content-[''] after:block after:w-[20px] after:h-[20px] after:absolute after:top-[0] after:left-[0] after:border-[3px] after:border-solid after:border-[#9EAEBC] after:rounded-[3px]">
                                            <svg width="13" height="9" viewBox="0 0 16 12" fill="none" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6668 1L5.50016 10.1667L1.3335 6" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <div className="text-[#212832] font-rubik font-[400] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">ОсОО Элит-строй-сити</div>
                                <div className="text-[#212832] font-rubik font-[400] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">1598723695486</div>
                                <div className="text-[#212832] font-rubik font-[400] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">г.Ош ул.Ибраимова 25 </div>
                                <div className="text-[#212832] font-rubik font-[400] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">+996 556 770 770</div>
                                <div className="border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">
                                    <button className="text-[#1E9F74] font-rubik font-[400] text-[16px] leading-[18px] py-[6px] px-[10px] bg-[#1E9F7433] rounded-[30px]">Активен</button>
                                </div>
                                <div className="border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">
                                    <button className="text-[#EEBB2D] font-rubik font-[400] text-[16px] leading-[18px] py-[6px] px-[10px] bg-[#EEBB2D33] rounded-[30px]">19.04.2024</button>
                                </div>
                                <div className="border-x-[1.3px] border-solid border-x-[transparent] px-[10px] max-w-[230px] w-[100%] flex items-center gap-[10px]">
                                    <button>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.8809 2.5C15.0997 2.28113 15.3596 2.10752 15.6455 1.98906C15.9315 1.87061 16.238 1.80965 16.5475 1.80965C16.8571 1.80965 17.1636 1.87061 17.4495 1.98906C17.7355 2.10752 17.9953 2.28113 18.2142 2.5C18.4331 2.71887 18.6067 2.97871 18.7251 3.26468C18.8436 3.55064 18.9045 3.85714 18.9045 4.16667C18.9045 4.4762 18.8436 4.7827 18.7251 5.06866C18.6067 5.35463 18.4331 5.61447 18.2142 5.83334L6.96419 17.0833L2.38086 18.3333L3.63086 13.75L14.8809 2.5Z" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_623_7994)">
                                                <path d="M16.0474 6.16667H9.3807C6.15904 6.16667 3.54736 8.77834 3.54736 12C3.54736 15.2217 6.15904 17.8333 9.3807 17.8333H16.0474C19.269 17.8333 21.8807 15.2217 21.8807 12C21.8807 8.77834 19.269 6.16667 16.0474 6.16667Z" fill="#D34545" stroke="#D34545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.38086 14.5C10.7616 14.5 11.8809 13.3807 11.8809 12C11.8809 10.6193 10.7616 9.5 9.38086 9.5C8.00015 9.5 6.88086 10.6193 6.88086 12C6.88086 13.3807 8.00015 14.5 9.38086 14.5Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_623_7994">
                                                    <rect width="20" height="20" fill="white" transform="translate(2.71411 2)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.21411 5H4.88078H18.2141" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.5475 5.00001V16.6667C16.5475 17.1087 16.3719 17.5326 16.0594 17.8452C15.7468 18.1577 15.3229 18.3333 14.8809 18.3333H6.54753C6.1055 18.3333 5.68158 18.1577 5.36901 17.8452C5.05645 17.5326 4.88086 17.1087 4.88086 16.6667V5.00001M7.38086 5.00001V3.33334C7.38086 2.89131 7.55645 2.46739 7.86902 2.15483C8.18158 1.84227 8.6055 1.66667 9.04753 1.66667H12.3809C12.8229 1.66667 13.2468 1.84227 13.5594 2.15483C13.8719 2.46739 14.0475 2.89131 14.0475 3.33334V5.00001" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.04736 9.16667V14.1667" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.3809 9.16667V14.1667" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.7141 10.8333V15.8333C15.7141 16.2754 15.5385 16.6993 15.226 17.0118C14.9134 17.3244 14.4895 17.5 14.0474 17.5H4.88078C4.43875 17.5 4.01483 17.3244 3.70227 17.0118C3.38971 16.6993 3.21411 16.2754 3.21411 15.8333V6.66667C3.21411 6.22464 3.38971 5.80072 3.70227 5.48816C4.01483 5.17559 4.43875 5 4.88078 5H9.88078" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.2141 2.5H18.2141V7.5" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.04736 11.6667L18.214 2.5" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="h-[44px] flex rounded-[8px]">
                                <div className="text-[#212832] font-rubik font-[600] text-[16px] leading-[18px] border-r-[1.3px] border-solid border-r-[#9EAEBC] px-[10px] pr-[15px] flex items-center max-w-[40px] w-[100%]">
                                    <div className="relative select-none groupChecking">
                                        <input type="checkbox" id="check2" className="hidden" />
                                        <label htmlFor="check2" className="w-[20px] h-[20px] block cursor-pointer after:content-[''] after:block after:w-[20px] after:h-[20px] after:absolute after:top-[0] after:left-[0] after:border-[3px] after:border-solid after:border-[#9EAEBC] after:rounded-[3px]">
                                            <svg width="13" height="9" viewBox="0 0 16 12" fill="none" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6668 1L5.50016 10.1667L1.3335 6" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <div className="text-[#212832] font-rubik font-[400] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">ОсОО Элит-строй-сити</div>
                                <div className="text-[#212832] font-rubik font-[400] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">1598723695486</div>
                                <div className="text-[#212832] font-rubik font-[400] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">г.Ош ул.Ибраимова 25 </div>
                                <div className="text-[#212832] font-rubik font-[400] text-[16px] leading-[18px] border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">+996 556 770 770</div>
                                <div className="border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">
                                    <button className="text-[#1E9F74] font-rubik font-[400] text-[16px] leading-[18px] py-[6px] px-[10px] bg-[#1E9F7433] rounded-[30px]">Активен</button>
                                </div>
                                <div className="border-x-[1.3px] border-solid border-x-[#9EAEBC] px-[10px] max-w-[230px] w-[100%] flex items-center">
                                    <button className="text-[#EEBB2D] font-rubik font-[400] text-[16px] leading-[18px] py-[6px] px-[10px] bg-[#EEBB2D33] rounded-[30px]">19.04.2024</button>
                                </div>
                                <div className="border-x-[1.3px] border-solid border-x-[transparent] px-[10px] max-w-[230px] w-[100%] flex items-center gap-[10px]">
                                    <button>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.8809 2.5C15.0997 2.28113 15.3596 2.10752 15.6455 1.98906C15.9315 1.87061 16.238 1.80965 16.5475 1.80965C16.8571 1.80965 17.1636 1.87061 17.4495 1.98906C17.7355 2.10752 17.9953 2.28113 18.2142 2.5C18.4331 2.71887 18.6067 2.97871 18.7251 3.26468C18.8436 3.55064 18.9045 3.85714 18.9045 4.16667C18.9045 4.4762 18.8436 4.7827 18.7251 5.06866C18.6067 5.35463 18.4331 5.61447 18.2142 5.83334L6.96419 17.0833L2.38086 18.3333L3.63086 13.75L14.8809 2.5Z" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_623_7994)">
                                                <path d="M16.0474 6.16667H9.3807C6.15904 6.16667 3.54736 8.77834 3.54736 12C3.54736 15.2217 6.15904 17.8333 9.3807 17.8333H16.0474C19.269 17.8333 21.8807 15.2217 21.8807 12C21.8807 8.77834 19.269 6.16667 16.0474 6.16667Z" fill="#D34545" stroke="#D34545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9.38086 14.5C10.7616 14.5 11.8809 13.3807 11.8809 12C11.8809 10.6193 10.7616 9.5 9.38086 9.5C8.00015 9.5 6.88086 10.6193 6.88086 12C6.88086 13.3807 8.00015 14.5 9.38086 14.5Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_623_7994">
                                                    <rect width="20" height="20" fill="white" transform="translate(2.71411 2)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.21411 5H4.88078H18.2141" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16.5475 5.00001V16.6667C16.5475 17.1087 16.3719 17.5326 16.0594 17.8452C15.7468 18.1577 15.3229 18.3333 14.8809 18.3333H6.54753C6.1055 18.3333 5.68158 18.1577 5.36901 17.8452C5.05645 17.5326 4.88086 17.1087 4.88086 16.6667V5.00001M7.38086 5.00001V3.33334C7.38086 2.89131 7.55645 2.46739 7.86902 2.15483C8.18158 1.84227 8.6055 1.66667 9.04753 1.66667H12.3809C12.8229 1.66667 13.2468 1.84227 13.5594 2.15483C13.8719 2.46739 14.0475 2.89131 14.0475 3.33334V5.00001" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.04736 9.16667V14.1667" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.3809 9.16667V14.1667" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.7141 10.8333V15.8333C15.7141 16.2754 15.5385 16.6993 15.226 17.0118C14.9134 17.3244 14.4895 17.5 14.0474 17.5H4.88078C4.43875 17.5 4.01483 17.3244 3.70227 17.0118C3.38971 16.6993 3.21411 16.2754 3.21411 15.8333V6.66667C3.21411 6.22464 3.38971 5.80072 3.70227 5.48816C4.01483 5.17559 4.43875 5 4.88078 5H9.88078" stroke="#4568AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.2141 2.5H18.2141V7.5" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9.04736 11.6667L18.214 2.5" stroke="#354668" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-[#DEEAFA] rounded-[8px] py-[5px] px-[10px] mt-auto">
                                <div className="flex items-center gap-[20px]">
                                    <p className="text-[#212832] font-inter font-[700] text-[16px] leading-[19px]">0 — 10</p>
                                    <p className="text-[#212832] font-rubik font-[400] text-[12px] leading-[14px]">из 1200 записей</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <p className="text-[#212832] font-inter font-[700] text-[16px] leading-[19px]">страница</p>
                                    <div className="flex items-center gap-[10px]">
                                        <button className="bg-[#4568AE] rounded-[5px] w-[30px] h-[30px] flex items-center justify-center">
                                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.99992 10.6667L1.33325 6.00001L5.99992 1.33334" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                        <div className="text-[#212832] font-rubik font-[400] text-[10px] leading-[11px] border border-solid border-[#354668] rounded-[5px] bg-[#FFFFFF] w-[38px] h-[26px] flex items-center justify-center">1</div>
                                        <button className="bg-[#4568AE] rounded-[5px] w-[30px] h-[30px] flex items-center justify-center">
                                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.33334L5.66667 6.00001L1 10.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="text-[#212832] font-inter font-[700] text-[16px] leading-[19px]">из 120</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-[#DEEAFA] rounded-t-[8px] py-[8px] px-[20px] mt-[16px]">
                            <div className="text-[#212832] font-rubik font-[400] text-[12px] leading-[14px]">Личный StartUp ©2020 </div>
                            <Link to="/" className="text-[#4568AE] font-inter underline font-[400] text-[12px] leading-[14px]">Техподдержка</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

