# capacitor-firebase-phone

Capacitor firebase phone plugin

## Install

```bash
npm install capacitor-firebase-phone
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`initFirebase(...)`](#initfirebase)
* [`verifyPhoneNumber(...)`](#verifyphonenumber)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### initFirebase(...)

```typescript
initFirebase(options: { apiKey: string; authDomain: string; projectId: string; storageBucket: string; messagingSenderId: string; appId: string; }) => Promise<boolean>
```

| Param         | Type                                                                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ apiKey: string; authDomain: string; projectId: string; storageBucket: string; messagingSenderId: string; appId: string; }</code> |

**Returns:** <code>Promise&lt;boolean&gt;</code>

--------------------


### verifyPhoneNumber(...)

```typescript
verifyPhoneNumber(options: { phoneNumber: string; }) => Promise<{ verificationID: string; }>
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ phoneNumber: string; }</code> |

**Returns:** <code>Promise&lt;{ verificationID: string; }&gt;</code>

--------------------

</docgen-api>
