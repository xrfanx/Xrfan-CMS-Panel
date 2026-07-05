
import './Features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Features() {
  return (
    <div className='features'>
        <div className="featureItem">
            <span className="featureTitle">Revenue</span>
            <div className="featureContaner">
                <span className='featureMoney'>$2,415</span>
                <span className='featureRate'>
                    -11.4
                    <ArrowDownwardIcon className='featureIcon negative'/>
                </span>
            </div>
            <span className='featureSub'>Compared to last month</span>
        </div>

        <div className="featureItem">
            <span className="featureTitle">Sales</span>
            <div className="featureContaner">
                <span className='featureMoney'>$1,935</span>
                <span className='featureRate'>
                    -1.4
                    <ArrowDownwardIcon className='featureIcon negative'/>
                </span>
            </div>
            <span className='featureSub'>Decrease in month - Worst</span>
        </div>
        
        <div className="featureItem">
            <span className="featureTitle">Cost</span>
            <div className="featureContaner">
                <span className='featureMoney'>$7,240</span>
                <span className='featureRate'>
                    +2.4
                    <ArrowUpwardIcon className='featureIcon'/>
                </span>
            </div>
            <span className='featureSub'>it's a little up - Normal</span>
        </div>

    </div>
  )
}
