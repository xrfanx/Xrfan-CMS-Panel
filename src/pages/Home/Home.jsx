
import Features from '../../components/features/Features'
import './Home.css'
import Chart from '../../components/chart/Chart'
import { xAxisData } from '../../datas'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className="home">
      <Features/>
      <Chart grid title='Month Sales' data={xAxisData} dataKey='Sale'/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
