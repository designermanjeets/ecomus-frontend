import * as React from 'react';
import { v4 as uuid } from 'uuid';
// import './MyReactComponent.scss';
import *as SdkModal from 'pg-test-project';


export interface IMyComponentProps {
  [key:string]:any
}

export const MyReactComponent: React.FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {

  const timerHandle = React.useRef<number | null>(null);
  const [stateCounter, setStateCounter] = React.useState(42);
  const [env, setEnv] = React.useState("dev");
  const [isOpen, setIsOpen] = React.useState(true);
  const [clientCode, setClientCode] = React.useState("TM001");
  const [transUserPassword, setTransUserPassword] = React.useState("RIADA_SP336"); 
  const [transUserName, setTransUserName] = React.useState("rajiv.moti_336");
  const [authkey, setAuthkey] = React.useState("kaY9AIhuJZNvKGp2");
  const [authiv, setAuthiv] = React.useState("YN2v8qQcU3rGfA1y");
  const [payerName, setpayerName] = React.useState("");
  const [payerEmail, setpayerEmail] = React.useState("");
  const [payerMobile, setpayerMobile] = React.useState("");
  const [payerAddress, setpayerAddress] = React.useState("");
  const [amount, setamount] = React.useState(""); 
  const [amountType, setamountType] = React.useState(""); 
  const [udf1, setudf1] = React.useState(""); 
  const [udf2, setudf2] = React.useState(""); 
  const [udf3, setudf3] = React.useState(""); 
  const [udf4, setudf4] = React.useState(""); 
  const [udf5, setudf5] = React.useState(""); 
  const [udf6, setudf6] = React.useState(""); 
  const [udf7, setudf7] = React.useState(""); 
  const [udf8, setudf8] = React.useState(""); 
  const [udf9, setudf9] = React.useState(""); 
  const [udf10, setudf10] = React.useState(""); 
  const [udf11, setudf11] = React.useState(""); 
  const [udf12, setudf12] = React.useState(""); 
  const [udf13, setudf13] = React.useState(""); 
  const [udf14, setudf14] = React.useState(""); 
  const [udf15, setudf15] = React.useState(""); 
  const [udf16, setudf16] = React.useState(""); 
  const [udf17, setudf17] = React.useState(""); 
  const [udf18, setudf18] = React.useState(""); 
  const [udf19, setudf19] = React.useState(""); 
  const [udf20, setudf20] = React.useState(""); 
  const [channelId, setchannelId] = React.useState("npm"); 
  const [programId, setprogramId] = React.useState("x");
  const [mcc, setmcc] = React.useState("");
  const [clientTxnId, setclientTxnId] = React.useState(uuid())

  return <SdkModal.PaymentInitModal env={env} onToggle={() => setIsOpen(false)} 
  clientTxnId = {clientTxnId}
  clientCode={clientCode} transUserPassword={transUserPassword} 
  transUserName={transUserName} isOpen={isOpen} authkey={authkey} authiv={authiv}
  payerName={payerName} payerEmail={payerEmail} payerMobile={payerMobile}
  payerAddress={payerAddress} amount={amount} amountType={amountType} udf1={udf1} udf2={udf2} udf3={udf3} udf4={udf4} udf5={udf5} udf6={udf6} udf7={udf7} udf8={udf8} udf9={udf9} udf10={udf10} udf11={udf11} udf12={udf12} udf13={udf13} udf14={udf14} udf15={udf15} udf16={udf16} udf17={udf17} udf18={udf18} udf19={udf19} udf20={udf20} channelId={channelId} programId={programId} mcc={mcc} 
  />;
  // return <div></div>
};