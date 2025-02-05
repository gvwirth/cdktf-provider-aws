# `aws_appconfig_extension_association`

Refer to the Terraform Registory for docs: [`aws_appconfig_extension_association`](https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association).

# `appconfigExtensionAssociation` Submodule <a name="`appconfigExtensionAssociation` Submodule" id="@cdktf/provider-aws.appconfigExtensionAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExtensionAssociation <a name="AppconfigExtensionAssociation" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association aws_appconfig_extension_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension_association

appconfigExtensionAssociation.AppconfigExtensionAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_arn: str,
  resource_arn: str,
  id: str = None,
  parameters: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.extensionArn">extension_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#extension_arn AppconfigExtensionAssociation#extension_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#resource_arn AppconfigExtensionAssociation#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#id AppconfigExtensionAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#parameters AppconfigExtensionAssociation#parameters}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_arn`<sup>Required</sup> <a name="extension_arn" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.extensionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#extension_arn AppconfigExtensionAssociation#extension_arn}.

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.resourceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#resource_arn AppconfigExtensionAssociation#resource_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#id AppconfigExtensionAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#parameters AppconfigExtensionAssociation#parameters}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.resetParameters"></a>

```python
def reset_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension_association

appconfigExtensionAssociation.AppconfigExtensionAssociation.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension_association

appconfigExtensionAssociation.AppconfigExtensionAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension_association

appconfigExtensionAssociation.AppconfigExtensionAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersion">extension_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionArnInput">extension_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionArn">extension_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `extension_version`<sup>Required</sup> <a name="extension_version" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionVersion"></a>

```python
extension_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extension_arn_input`<sup>Optional</sup> <a name="extension_arn_input" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionArnInput"></a>

```python
extension_arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `extension_arn`<sup>Required</sup> <a name="extension_arn" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.extensionArn"></a>

```python
extension_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExtensionAssociationConfig <a name="AppconfigExtensionAssociationConfig" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import appconfig_extension_association

appconfigExtensionAssociation.AppconfigExtensionAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_arn: str,
  resource_arn: str,
  id: str = None,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionArn">extension_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#extension_arn AppconfigExtensionAssociation#extension_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.resourceArn">resource_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#resource_arn AppconfigExtensionAssociation#resource_arn}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#id AppconfigExtensionAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#parameters AppconfigExtensionAssociation#parameters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_arn`<sup>Required</sup> <a name="extension_arn" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.extensionArn"></a>

```python
extension_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#extension_arn AppconfigExtensionAssociation#extension_arn}.

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#resource_arn AppconfigExtensionAssociation#resource_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#id AppconfigExtensionAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.appconfigExtensionAssociation.AppconfigExtensionAssociationConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/appconfig_extension_association#parameters AppconfigExtensionAssociation#parameters}.

---



