// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS DynamoDB
*/
export interface DataAwsDynamodbTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html#name DataAwsDynamodbTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html#tags DataAwsDynamodbTable#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * server_side_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html#server_side_encryption DataAwsDynamodbTable#server_side_encryption}
  */
  readonly serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption;
}
export class DataAwsDynamodbTableAttribute extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataAwsDynamodbTableGlobalSecondaryIndex extends cdktf.ComplexComputedList {

  // hash_key - computed: true, optional: false, required: false
  public get hashKey() {
    return this.getStringAttribute('hash_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }

  // range_key - computed: true, optional: false, required: false
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }

  // read_capacity - computed: true, optional: false, required: false
  public get readCapacity() {
    return this.getNumberAttribute('read_capacity');
  }

  // write_capacity - computed: true, optional: false, required: false
  public get writeCapacity() {
    return this.getNumberAttribute('write_capacity');
  }
}
export class DataAwsDynamodbTableLocalSecondaryIndex extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // non_key_attributes - computed: true, optional: false, required: false
  public get nonKeyAttributes() {
    return this.getListAttribute('non_key_attributes');
  }

  // projection_type - computed: true, optional: false, required: false
  public get projectionType() {
    return this.getStringAttribute('projection_type');
  }

  // range_key - computed: true, optional: false, required: false
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }
}
export class DataAwsDynamodbTablePointInTimeRecovery extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
}
export class DataAwsDynamodbTableReplica extends cdktf.ComplexComputedList {

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}
export class DataAwsDynamodbTableTtl extends cdktf.ComplexComputedList {

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
}
export interface DataAwsDynamodbTableServerSideEncryption {
}

export function dataAwsDynamodbTableServerSideEncryptionToTerraform(struct?: DataAwsDynamodbTableServerSideEncryptionOutputReference | DataAwsDynamodbTableServerSideEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsDynamodbTableServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAwsDynamodbTableServerSideEncryption | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsDynamodbTableServerSideEncryption | undefined) {
    if (value === undefined) {
    }
    else {
    }
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html aws_dynamodb_table}
*/
export class DataAwsDynamodbTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_dynamodb_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dynamodb_table.html aws_dynamodb_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDynamodbTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDynamodbTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dynamodb_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
    this._serverSideEncryption.internalValue = config.serverSideEncryption;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // attribute - computed: true, optional: false, required: false
  public attribute(index: string) {
    return new DataAwsDynamodbTableAttribute(this, 'attribute', index);
  }

  // billing_mode - computed: true, optional: false, required: false
  public get billingMode() {
    return this.getStringAttribute('billing_mode');
  }

  // global_secondary_index - computed: true, optional: false, required: false
  public globalSecondaryIndex(index: string) {
    return new DataAwsDynamodbTableGlobalSecondaryIndex(this, 'global_secondary_index', index);
  }

  // hash_key - computed: true, optional: false, required: false
  public get hashKey() {
    return this.getStringAttribute('hash_key');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_secondary_index - computed: true, optional: false, required: false
  public localSecondaryIndex(index: string) {
    return new DataAwsDynamodbTableLocalSecondaryIndex(this, 'local_secondary_index', index);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // point_in_time_recovery - computed: true, optional: false, required: false
  public pointInTimeRecovery(index: string) {
    return new DataAwsDynamodbTablePointInTimeRecovery(this, 'point_in_time_recovery', index);
  }

  // range_key - computed: true, optional: false, required: false
  public get rangeKey() {
    return this.getStringAttribute('range_key');
  }

  // read_capacity - computed: true, optional: false, required: false
  public get readCapacity() {
    return this.getNumberAttribute('read_capacity');
  }

  // replica - computed: true, optional: false, required: false
  public replica(index: string) {
    return new DataAwsDynamodbTableReplica(this, 'replica', index);
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }

  // stream_enabled - computed: true, optional: false, required: false
  public get streamEnabled() {
    return this.getBooleanAttribute('stream_enabled') as any;
  }

  // stream_label - computed: true, optional: false, required: false
  public get streamLabel() {
    return this.getStringAttribute('stream_label');
  }

  // stream_view_type - computed: true, optional: false, required: false
  public get streamViewType() {
    return this.getStringAttribute('stream_view_type');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // ttl - computed: true, optional: false, required: false
  public ttl(index: string) {
    return new DataAwsDynamodbTableTtl(this, 'ttl', index);
  }

  // write_capacity - computed: true, optional: false, required: false
  public get writeCapacity() {
    return this.getNumberAttribute('write_capacity');
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption = new DataAwsDynamodbTableServerSideEncryptionOutputReference(this as any, "server_side_encryption", true);
  public get serverSideEncryption() {
    return this._serverSideEncryption;
  }
  public putServerSideEncryption(value: DataAwsDynamodbTableServerSideEncryption) {
    this._serverSideEncryption.internalValue = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      server_side_encryption: dataAwsDynamodbTableServerSideEncryptionToTerraform(this._serverSideEncryption.internalValue),
    };
  }
}