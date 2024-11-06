import { classNames } from "@/utils/className";
import Button from "./common/button/Button";
import SVGWrapper from "./common/wrapper/SVGWrapper";


const formatNumber = (number: number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    number,
  )
}

const Header = () => {
  return <header className={classNames(
    "h-[50px] w-full sticky top-0 flex justify-between",
    "px-2 shadow-md bg-white"
  )}>
    <div className="flex items-center gap-1">
      <SVGWrapper src="/assets/header/menu.svg" alt="Menu bar" className="pr-2" />
      <SVGWrapper src="/assets/header/fun88.svg" alt="Logo" height={21} width={93} />
    </div>
    <div className="flex items-center gap-1">
      <SVGWrapper src="/assets/header/wallet.svg" alt="Wallet" height={21} width={19} />
      <b className="text-base text-primary">{formatNumber(1990.06)}</b>
      <SVGWrapper src="/assets/header/divider.svg" alt="Divider" className="h-[34px] w-auto" />
      <Button size="xs">
        <SVGWrapper src="/assets/header/user.svg" alt="User" />
      </Button>
    </div>
  </header>
}

export default Header;