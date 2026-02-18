---
subject: Paper Summary
order: 1
---

# Deep Facial Expression Recognition - A Survey
---
Main Key Word: #emotion #AI #Facial_Expression

# 1. Introduction
Recently, it is revealed that 6 basic emotions are not universal, it's culture specific.

There are a lot of emotion description models, such as the Facial Action Coding System, that are considered to represent a wider range of emotions.
However, the categorical model that describe emotions is still the most popular perspective for FER.

## Two FER systems
### 1. static image FER
### 2. Dynamic sequence FER

In addition, audio and physiological channels have also been used in multimodal systems.

## Recent Researches
Tradition : handcrafted features or shallow learning
Recent : DeepLearning

## What does this paper deal with?
Systematic research on deep learning for FER tasks based on both static images and videos.

## Problems :
1. Require a large amount of training data to avoid overfitting.
	1. but existing facial expression databases are not sufficient to train the well-known neural network with deep architecture that ahieved the most promising results in object recognition tasks.
	2. high inter-subject variations due to personal attributes, such as age, gender, level of expressiveness, and etc.
	3. subject identity bias, variations in pose, illumination and occlusions

# 2. Facial Expression Databases
Refer to 2~4p

# 3. Deep Facial Expression Recognition
Common Steps for deep FER
## 1. Pre-Processing
Due to variations that are irrelevant to facial expressions, pre-processing is required to align and normalize the visual semantic information.

### 3.1.1 Face alignment
For using coordinates of localized landmarks
In table2(4p), face alignment detectors are introduced

Main skill : Cascade of regression functions / Cascade of regression CNN

### 3.1.2 Data augmentation
#### 1. on-the-fly data augmentation
- usually embeded in deep learning toolkits to alleviate overfitting
- randomly cropped input smples from the four corners and center of the image, and rotate or flip these.
	- it makes larger dataset than the original training data.
- Two common prediction modes are adopted during testing:
	- only the center patch of the face is used for prediction
	- the prediction value is averaged over all ten crops

#### 2. offline data augmentation
Frequent used operations :
1. Random perturbations 
2. Transforms
 e.g., rotation, shifting, skew, scaling, noise, contrast and color jittering.

Combinations of multiple operations can generate more unseen training samples and make the network more robust to deviated and rotated faces. 

### 3.1.3 Face normalization 
Purpose : reduce difference that impair the FER performance. 
Solution :
1. illumination normalization 
	Using these algorithms :
	1. isotropic diffusion (IS)-based normalization
	2. discrete cosine transform (DCT)-based normalization
	3. difference of Gaussian(DoG)
	 **homomorphic filtering based normalization**
	- reported to yield more consistent result
	**histogram equalization combined with illumination normalization** 
	- results in better face recognition performance than that achieved using illumination normalization on it own
	- effective when background's and foreground's brightness are similar 
	- Problem : directly applying it may overemphasize local contrast
		- Solution : aw eighted summation approach to combine histogram equalization and linear mapping.
	**Best in each training and testing steps :**
	- Global constrast normalization(GCN)
	- Histogram equalization
2. pose normalization (frontalization)
	1. By Hassner et al.
		- 3d texture reference model generic to all faces -> estimate visible facial components 
		- initial frontalized face is synthesized by back-projecting each input face image to the reference cordinate system 
	2. By Sagonas et al.
		- Statistical model
		- simultaneously localize landmarks and convert facial poses using only frontal faces
	3. GAN based deep models.

## 3.2 Deep networks for feature learning 
### 3.2.1. CNN 
CNN is better to face location changes and scale variations and behaves better than the MLP 
in the case of previously unseen face pose variations.

3.2.2 Deep belief network (DBN)

---
# References
