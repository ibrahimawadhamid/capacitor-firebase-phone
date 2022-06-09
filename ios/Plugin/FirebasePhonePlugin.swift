import Foundation
import Capacitor
import Firebase
import FirebaseCore
import FirebaseAuth

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(FirebasePhonePlugin)
public class FirebasePhonePlugin: CAPPlugin {
    private let implementation = FirebasePhone()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    
    @objc func initFirebase(_ call: CAPPluginCall) {
        FirebaseApp.configure()
        call.resolve([
            "result": true
        ])
    }
    
    @objc func verifyPhoneNumber(_ call: CAPPluginCall) {
        let phoneNumber = call.getString("phoneNumber") ?? ""
        print(phoneNumber)
        PhoneAuthProvider.provider().verifyPhoneNumber(phoneNumber, uiDelegate: nil) { verificationID, error in
              if let error = error {
                print(error.localizedDescription)
                return
              }
              print(verificationID)
              call.resolve([
                "result": verificationID
              ])
          }
    }
    
}
