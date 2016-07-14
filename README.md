# Documenation

There are a few steps to make this work:

1. Add the "isDependent" class to the element.
2. Add the data attribute to the`<option>`
3. Name your `<select>` ID
4. Create your "Details" area
5. Create your "Content" area


## Step 1: The `<select>` Class

Add the class "isDependent" to the `<select>` element.

```
<select id="test" name="test" class="isDependent">
  <option>Please Select</option>
  <option value="Yes" data-show-dependent-relative="true">Yes</option>
  <option value="No">No</option>
</select>
```

## Step 2: `<option>` Preferences

Place the following attribute on the option that requires the contents to show.

```
<select id="test" name="test" class="isDependent">
  <option>Please Select</option>
  <option value="Yes" data-show-dependent-relative="true">Yes</option>
  <option value="No">No</option>
</select>
```

## Step 3: The `<select>` ID

You can use the ID of the select element to drive the content to show.
```
<select id="test" name="test" class="isDependent">
  <option>Please Select</option>
  <option value="Yes" data-show-dependent-relative="true">Yes</option>
  <option value="No">No</option>
</select>
```

1. Select: `id="test"`
2. Where you want the content to show: `id="testDetails"`
3. The content you want to show: `id="testDetailsContent"`


## Step 4: The "Details" `<div>`

Create an empty `<div>` with an ID that has the ID of the `<select>` + "Details"

In this case the ID of the `<select>` is "test", so the "Details" `<div>` ID is "testDetails"

```
  <div id="testDetails"></div>
```

## 5. The "Content" `<div>`

Following the same naming convention as the "Details" `<div>`, we'll create the content `<div>`.

Take the name of the "Details" `<div>` (id="testDetails"), and add "Content".

In this case, we'll end up with "testDetailsContent"

```
  <div id="conditionalFormSections" style="display:none;width:0;height:0;overflow:hidden;">
    <div id="testDetailsContent">
      <p>This is the content that will display in the "Details" div (id="testDetails").</p>
    </div>
  </div>
```

<hr />

## Examples:

- <a href="form-example.html">Basic Example</a>
- <a href="form-simple-content.html">Content Example</a>
- <a href="form-simple-fields.html">Group of Fields Example</a>

## What about multiple instances?

This allows you to pull specific contents with an ID.

<a href="form-multiple-content.html">View Example</a>

Place the following attribute on the options that requires contents to show.

Note: When showing by ID the '#' sign is required at the beginning of the ID name.</em>

```
<select id="test" name="test" class="isDependent">
  <option>Please Select</option>
  <option value="Yes" data-show-dependent-by-id="#idOfElement">Yes</option>
  <option value="No">No</option>
</select>
```

## What about multiple unique contents?

This allows you to parse multiple IDs at once.

<a href="form-multiple-ids-at-once.html">View Example</a>

Place the following attribute on the options that requires contents to show.

<em>Note: 'dependents' plural, not 'dependent' singular</em>

```
<select id="test" name="test" class="isDependent">
  <option>Please Select</option>
  <option value="Yes" data-show-dependents-by-id="#idOfElement, #idOfElementTwo, #idOfElementThree">Yes</option>
  <option value="No">No</option>
</select>
```
