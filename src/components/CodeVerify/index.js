import React from 'react';
import PropTypes from 'prop-types';
const _code_chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const _code_color1 = ['#fffff0', '#f0ffff', '#f0fff0', '#fff0f0'];
const _code_color2 = ['#FF0033', '#006699', '#993366', '#FF9900', '#66CC66', '#FF33CC'];
export default class CodeVerify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeInput: '',
            code: ''
        }
        console.log('a1');
    }
    checkCode() {
        if(this.props.type == 1) {		//普通验证码
            var own_input = this.state.codeInput.toUpperCase();
            this.code_chose = this.code_chose.toUpperCase();
        }else {
            var own_input = this.state.codeInput;
        }
        if(own_input == this.code_chose) {
            this.props.success(this);
        }else {
            this.options.error(this);
            this.setCode();
        }
        console.log('a2');
    }
    setCode(){
        let code = '';
        this.code_chose = '';
        if(this.props.type == 1) {		//普通验证码
            for(var i = 0; i < this.props.codeLength; i++) {
                var charNum = Math.floor(Math.random() * 52);
                var tmpStyle = (charNum%2 ==0)? "font-style:italic;margin-right: 10px;":"font-weight:bolder;";
                tmpStyle += (Math.floor(Math.random() * 2) == 1)? "font-weight:bolder;":"";
                
                this.code_chose += _code_chars[charNum];
                code += '<font style="'+tmpStyle+'">'+_code_chars[charNum]+'</font>';
            }
        }else {		//算法验证码
            
            var num1 = Math.floor(Math.random() * this.options.figure);
            var num2 = Math.floor(Math.random() * this.options.figure);
            
            if(this.options.arith == 0) {
                var tmparith = Math.floor(Math.random() * 3);
            }
            
            switch(tmparith) {
                case 1 :
                    this.code_chose = parseInt(num1) + parseInt(num2);
                    code = num1 + ' + ' + num2 + ' = ?';
                    break;
                case 2 :
                    if(parseInt(num1) < parseInt(num2)) {
                        var tmpnum = num1;
                        num1 = num2;
                        num2 = tmpnum;
                    }
                    this.code_chose = parseInt(num1) - parseInt(num2);
                    code = num1 + ' - ' + num2 + ' = ?';
                    break;
                default :
                    this.code_chose = parseInt(num1) * parseInt(num2);
                    code = num1 + ' × ' + num2 + ' = ?';
                    break;
            }
        }
        this.setState({ code })
    }
    render() {
        
        const color1Num = Math.floor(Math.random() * 3);
        const color2Num = Math.floor(Math.random() * 5);
        return (
            <div className="cerify-code-panel">
                <div
                    className="verify-code"
                    dangerouslySetInnerHTML={{ __html:  this.state.code }}
                    style={{
                        backgroundColor: _code_color1[color1Num],
                        color:  _code_color2[color2Num],
                        wdith: this.props.width,
                        height: this.props.height,
                        fontSize: this.props.fontSize
                    }}>
                </div>
                <div className="verify-code-area" style={{ width: this.props.width }}>
                    <div className="verify-input-area">
                        <input value={ this.state.codeInput } onChange={(e)=>{this.setState({ codeInput: this.state.codeInput })}}type="text" className="varify-input-code" />
                    </div>
                    <div onClick={()=>{
                        this.setCode();
                    }} className="verify-change-area"><a className="verify-change-code">换一张</a></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setCode();
    }

}
CodeVerify.protoTypes = {
    type: PropTypes.number,
    figure: PropTypes.number,
    arith: PropTypes.number,
    wdith: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    codeLength: PropTypes.number,
    btnId: PropTypes.string,
    ready: PropTypes.func,
    success: PropTypes.func,
    error: PropTypes.func,
}
CodeVerify.defaultProps = {
    type: 1,
    figure: 100,	//位数，仅在type=2时生效
    arith: 0,	//算法，支持加减乘，0为随机，仅在type=2时生效
    width: '200px',
    height: '60px',
    fontSize: '30px',
    codeLength: 6,
    btnId: 'check-btn',
    ready: function () { },
    success: function () { },
    error: function () { }
}