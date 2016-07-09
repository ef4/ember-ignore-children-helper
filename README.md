# ignore-children

_No actual children were neglected in the making of this addon._

This Ember addon provides a single helper named `ignore-children`. It lets you declare an event handler that will only fire for events that _directly_ target the given element. Events from its children will be ignored.

For example, assume that `your-component` accepts an action named `doSomething`:

```hbs
{{your-component doSomething=(action "alrightyThen")}}
```

Then within `your-component.hbs`, you can say:

```hbs
<div class="outer" onclick={{action (ignore-children doSomething) }}>
  Clicks in this area will cause "doSomething" to be called.
  <div class="inner">But clicks in this area will not! ignore-children is blocking them for us.</div>
</div>
```

See tests/dummy/app/index.hbs for a working example you can play with.

## Installation

`ember install ember-ignore-children-helper`

## Running, Testing, etc

Standard ember addon conventions apply. In this repo, `ember s` will run the included dummy app and `ember test` will run the test suite.
