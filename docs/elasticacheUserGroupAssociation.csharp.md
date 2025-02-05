# `aws_elasticache_user_group_association`

Refer to the Terraform Registory for docs: [`aws_elasticache_user_group_association`](https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/elasticache_user_group_association).

# `elasticacheUserGroupAssociation` Submodule <a name="`elasticacheUserGroupAssociation` Submodule" id="@cdktf/provider-aws.elasticacheUserGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheUserGroupAssociation <a name="ElasticacheUserGroupAssociation" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/elasticache_user_group_association aws_elasticache_user_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheUserGroupAssociation(Construct Scope, string Id, ElasticacheUserGroupAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig">ElasticacheUserGroupAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig">ElasticacheUserGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheUserGroupAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheUserGroupAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

ElasticacheUserGroupAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.userGroupIdInput">UserGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.userGroupId">UserGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UserGroupIdInput`<sup>Optional</sup> <a name="UserGroupIdInput" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.userGroupIdInput"></a>

```csharp
public string UserGroupIdInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UserGroupId`<sup>Required</sup> <a name="UserGroupId" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.userGroupId"></a>

```csharp
public string UserGroupId { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheUserGroupAssociationConfig <a name="ElasticacheUserGroupAssociationConfig" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new ElasticacheUserGroupAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UserGroupId,
    string UserId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.userGroupId">UserGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/elasticache_user_group_association#user_group_id ElasticacheUserGroupAssociation#user_group_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/elasticache_user_group_association#user_id ElasticacheUserGroupAssociation#user_id}. |
| <code><a href="#@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/elasticache_user_group_association#id ElasticacheUserGroupAssociation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserGroupId`<sup>Required</sup> <a name="UserGroupId" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.userGroupId"></a>

```csharp
public string UserGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/elasticache_user_group_association#user_group_id ElasticacheUserGroupAssociation#user_group_id}.

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/elasticache_user_group_association#user_id ElasticacheUserGroupAssociation#user_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.elasticacheUserGroupAssociation.ElasticacheUserGroupAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/4.66.1/docs/resources/elasticache_user_group_association#id ElasticacheUserGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



