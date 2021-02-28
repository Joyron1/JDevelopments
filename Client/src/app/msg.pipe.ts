import { identifierModuleUrl } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msg'
})
export class MsgPipe implements PipeTransform {

  transform(messages: any, msgSearch: any): unknown {
    console.log("msgSearch:", msgSearch)
    console.log("messages:", messages)
    // console.log("searchOption:", searchOption)

    if (msgSearch == null) {
      return messages;
    }

    let filteredArray = [];

    if (msgSearch == "0") {
      for (let i = 0; i < messages.length; i++) {
        console.log()
        if (messages[i].read == msgSearch)
          filteredArray.push(messages[i])
      }
    }
    if (msgSearch == "1") {
      for (let i = 0; i < messages.length; i++) {
        console.log()
        if (messages[i].read == msgSearch)
          filteredArray.push(messages[i])
      }
    }
    else if (msgSearch == "2") {
      return messages;
    }
    return filteredArray;
  }

}
