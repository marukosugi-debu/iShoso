//
//  iShousoAppDelegate.h
//  iShouso
//
//  Created by 石川 直樹 on 10/05/29.
//  Copyright __MyCompanyName__ 2010. All rights reserved.
//

#import <UIKit/UIKit.h>

@class iShousoViewController;

@interface iShousoAppDelegate : NSObject <UIApplicationDelegate> {
    UIWindow *window;
    iShousoViewController *viewController;
}

@property (nonatomic, retain) IBOutlet UIWindow *window;
@property (nonatomic, retain) IBOutlet iShousoViewController *viewController;

@end

