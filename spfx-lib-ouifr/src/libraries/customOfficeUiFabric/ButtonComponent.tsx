import * as React from 'react';
import { DefaultButton, Label, PrimaryButton } from 'office-ui-fabric-react';

interface IButtonComponentProps {
  primaryButtonText: string;
  defaultButtonText: string;
}

export class ButtonComponent extends React.Component<IButtonComponentProps, {}> {
  public render(): JSX.Element {
    return (
      <div>
        <Label>Button Components rendered from SPFx library component:</Label>
        <PrimaryButton
          text={this.props.primaryButtonText}
        />
        <DefaultButton
          text={this.props.defaultButtonText}
        />
      </div>
    );
  }
}