
import { BsCheck2Circle } from 'react-icons/bs';
import { GrStatusWarning } from 'react-icons/gr';
import { BiErrorAlt } from 'react-icons/bi';
import { IconType } from 'react-icons/lib';
import Ping from 'ping-url';

class ServiceCheck {

    private seconds = 1
    private OpenRs2 = 0
    private OsrsQuery = 1

    private GREEN = "#DBDBEA"
    private RED = "#B22D00"
    private YELLOW = "#B2B200"

    private state: boolean[] = new Array(true, true);
    iconState: IconType[] = new Array(BsCheck2Circle, BsCheck2Circle);
    iconStateColors: String[] = new Array(this.GREEN, this.GREEN);
    serversState: IconType = BsCheck2Circle
    serversStateColor: String = this.GREEN

    init() {
      this.checkStatus()
      setInterval(() => {
          this.checkStatus()
      },this.seconds * 1000);
    }

  
  
    checkStatus() {

    
        if(this.state.every(Boolean)) {
            this.serversState = BsCheck2Circle
            this.serversStateColor = this.GREEN
        } else if(!this.state[0] && !this.state[1]) {
            this.serversState = BiErrorAlt
            this.serversStateColor = this.RED
        } else {
           this.serversState = GrStatusWarning
           this.serversStateColor = this.YELLOW
        }


        this.iconState[this.OpenRs2] = this.state[this.OpenRs2] ? BsCheck2Circle : BiErrorAlt
        this.iconState[this.OsrsQuery] = this.state[this.OsrsQuery] ? BsCheck2Circle : BiErrorAlt

        this.iconStateColors[this.OpenRs2] = this.state[this.OpenRs2] ? this.GREEN : this.RED
        this.iconStateColors[this.OsrsQuery] = this.state[this.OsrsQuery] ? this.GREEN : this.RED

      

    }
  
}

export default ServiceCheck;