// https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/securityhub_organization_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}
  */
  readonly autoEnableStandards?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/securityhub_organization_configuration aws_securityhub_organization_configuration}
*/
export class SecurityhubOrganizationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_organization_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/securityhub_organization_configuration aws_securityhub_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubOrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubOrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_organization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.66.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoEnable = config.autoEnable;
    this._autoEnableStandards = config.autoEnableStandards;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: boolean | cdktf.IResolvable; 
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean | cdktf.IResolvable) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }

  // auto_enable_standards - computed: true, optional: true, required: false
  private _autoEnableStandards?: string; 
  public get autoEnableStandards() {
    return this.getStringAttribute('auto_enable_standards');
  }
  public set autoEnableStandards(value: string) {
    this._autoEnableStandards = value;
  }
  public resetAutoEnableStandards() {
    this._autoEnableStandards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableStandardsInput() {
    return this._autoEnableStandards;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: cdktf.booleanToTerraform(this._autoEnable),
      auto_enable_standards: cdktf.stringToTerraform(this._autoEnableStandards),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
