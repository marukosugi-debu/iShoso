//
//  iShousoViewController.m
//  iShouso
//
//  Created by 石川 直樹 on 10/05/29.
//  Copyright __MyCompanyName__ 2010. All rights reserved.
//

#import "iShousoViewController.h"

@implementation iShousoViewController

@synthesize count;

- (id)init {
	self = [super init];
	
	if (self != nil) {
		//NSLog(@"init!");
		/*
		count=0;
		UIFont *font = [UIFont fontWithName:@"Arial" size:100.0];
		CGRect countPos = CGRectMake(400.0, 500.0f, 50.0f, 50.0f);
		UITextView *countView = [[UITextView alloc] initWithFrame:countPos];
		countView.font = font;
		countView.text = [NSString stringWithFormat:@"%d回目の傾きだよー",count];
		[self.view addSubview:countView];
		*/
		
	}
	return self;
}

/*
// The designated initializer. Override to perform setup that is required before the view is loaded.
- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil {
    if ((self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil])) {
        // Custom initialization
    }
    return self;
}
*/

/*
// Implement loadView to create a view hierarchy programmatically, without using a nib.
- (void)loadView {
}
*/


/*
// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad {
    [super viewDidLoad];
}
*/

/*
- (BOOL)didRotateFromInterfaceOrientation:(UIInterfaceOrientation)fromInterfaceOrientation{
	NSLog(@"did Rotate!!!");
	return YES;	
}
 */


// Override to allow orientations other than the default portrait orientation.
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
	//スクリーンのCGRect取得
	CGRect screenBounds = [[UIScreen mainScreen] bounds];
	//フォント、文字サイズ定義
	UIFont *font = [UIFont fontWithName:@"Arial" size:100.0];
	//傾き表示用ビュー準備
	UITextView *orientView = [[UITextView alloc] initWithFrame:screenBounds];
	orientView.font = font;    
	if (interfaceOrientation == UIInterfaceOrientationPortrait) {
		//縦
		orientView.text = @"縦だよー";
		[self.view addSubview:orientView];
		
		
		//勝訴画像貼付け
		UIImageView *shousoView = [[UIImageView alloc] initWithFrame:screenBounds];
		[self.view addSubview:shousoView];
		
	}
	
	
	if ( interfaceOrientation == UIInterfaceOrientationLandscapeLeft) {
		//横（ホーム左）
		orientView.text = @"横左だよー";
		[self.view addSubview:orientView];
	}
	
	if ( interfaceOrientation == UIInterfaceOrientationLandscapeRight) {
		//横（ホーム右）
		orientView.text = @"横右だよー";
		[self.view addSubview:orientView];
		
		return 0;
	}
	
	
	if (interfaceOrientation == UIInterfaceOrientationPortraitUpsideDown) {
		//ひっくり返り
		orientView.text = @"さかさまだよー";
		[self.view addSubview:orientView];
		
		//勝訴画像貼付け
		UIImageView *shousoView = [[UIImageView alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
		UIImage *shouso = [UIImage imageNamed:@"shouso.png"];
		shousoView.image = shouso;
		[self.view addSubview:shousoView];
		[shouso release];
		 
	}
	return 0;

}

- (void)didReceiveMemoryWarning {
	// Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
	// Release any cached data, images, etc that aren't in use.
}

- (void)viewDidUnload {
	// Release any retained subviews of the main view.
	// e.g. self.myOutlet = nil;
}


- (void)dealloc {
    [super dealloc];
}

@end
