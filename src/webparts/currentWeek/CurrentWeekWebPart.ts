import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './CurrentWeekWebPart.module.scss';
import * as strings from 'CurrentWeekWebPartStrings';

import * as moment from 'moment';

export interface ICurrentWeekWebPartProps {
  description: string;
}

export default class CurrentWeekWebPart extends BaseClientSideWebPart<ICurrentWeekWebPartProps> {

  private _startDate:string = moment(strings.WPstartDate, strings.WPFormat).format(strings.WPFormat); 
  private _currentDate:string = moment().format(strings.WPFormat)
  private _currentWeeksemester:number = moment(this._currentDate, strings.WPFormat).diff(moment(this._startDate, strings.WPFormat), 'week')

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.currentWeek }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <h1>${ strings.WPTitleText } ${this._startDate.split("/")[2]}-${ this._startDate.split("/")[1] < '06' ? "I" : "II" }</h1>
              <h3><i>${ strings.WPSubtitleText }</i></h3>
              ${this._currentWeeksemester <= 18 ? 
                '<p>Actualmente estamos en la semana <strong><u>'+this._currentWeeksemester+'</u></strong> del semestre.</p>' 
              : 
                '<p>Semestre finalizado.</p>'
              } 
              </div>
          </div>
        </div>
      </div>`;
  }
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
