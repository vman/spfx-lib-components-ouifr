import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';

import { CustomOfficeUiFabricLibrary, ButtonComponent } from 'spfx-lib-ouifr';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  
  private myInstance;
  
  constructor(props){
    super(props);
    this.myInstance = new CustomOfficeUiFabricLibrary();
  }
  
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div>
        <ButtonComponent 
          primaryButtonText="Primary Button"
          defaultButtonText= "Default Button" />
      </div>
    );
  }

  public componentDidMount(){
    
    console.log(this.myInstance.name());
  }
}
