import Footer from '@/components/commons/Footer';
import { Header } from '@/components/commons/Header';
import TopBar from '@/components/commons/TopBar';
import { useParams } from 'react-router-dom';


export default function BlogPostDetailSer() {
  const { id } = useParams();

  // This would typically come from an API call
  const posts = {
    1: {
      id: 1,
      title: 'Pet service at home District 11: Dedicated care, good price',
      description: 'Do you consider your pet as a member of your family? Do you want to give them...',
      date: '14/03/2025',
      time: '10:30 AM',
      author: 'Sarah Johnson',
      comments: 'No comments',
      image: 'https://media.istockphoto.com/id/1276788283/photo/young-woman-with-laughing-corgi-puppy-nature-background.jpg?s=612x612&w=0&k=20&c=nOiBnVA13BupVn0t7o5fCytV5ZROgNgSWkQas3IuHIw=',
      content: `
        <p>Do you consider your pet as a member of your family? Do you want to give them the best but don't have much time? Let Pawlish - the leading reputable pet service at home in District 11, Ho Chi Minh City, help you take care of your pet professionally, dedicatedly and effectively.</p>
        <h1>Pet services at home – things “Sen” should know</h1>
        <p>Pet service at home in District 11 is a comprehensive care solution, bringing many significant benefits to both owners and pets in modern society. By providing care, beauty and medical services right in the pet's living space, this form helps save time and effort for owners, while reducing stress for pets when being cared for in a familiar environment.</p>
        <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/12/30/866568/Gooming-3.jpg" style="width: 900px, height:auto" /> 
        <p>Pet services at home in District 11 also offer flexibility in terms of time, allowing appointments to be made at suitable times, even outside of business hours. In addition, limiting contact with other pets helps reduce the risk of infection, ensuring health safety. In particular, this service is very convenient for special cases such as elderly pets, sick pets or pets with difficulty moving. Owners also have the opportunity to discuss in detail the condition and needs of their pets in a real environment, receiving direct advice from experts.</p>
        <h1>Pawlish Pet Services at Home – Diverse and Professional</h1>
        <p>With over 5 years of experience in the pet service industry, Pawlish is proud to bring customers high quality services, satisfying all your pet care needs.</p>
        <h2>Comprehensive care and cleaning services</h2>
        <ul>
          <li>Professional bathing with premium products</li>
          <li>Ear, eye and mouth hygiene</li>
          <li>Safe nail cutting and grinding</li>
          <li>Grooming and removing loose hair</li>
          <li>Deodorant and Perfume Sprays</li>
        </ul>
        <h2>Grooming services</h2>
        <ul>
        <li>Create a suitable coat style for each breed of dog and cat</li>
        <li>Hygienic shaving for sensitive areas</li>
        <li>Advice on coat styles suitable for the weather and needs of your pet</li>
        </ul>
        <h1>Attentive and thoughtful care</h1>
        <p>Pawlish always puts the safety, health and happiness of pets first. We understand that pets are an important part of your family, so we always strive to bring them the best and most thoughtful pet services at home in District 11.</p>
        <img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-44386-800.jpg" style="width: 900px, height:auto" />
        <h2>Experienced staff</h2>
        <p>Pawlish's staff are well-trained, professional, and experienced in pet care. We always update the latest knowledge and skills in pet care, ensuring to bring your pets the best services.</p>
        <h2>Serve with enthusiasm, dedication and thoughtfulness</h2>
        <p>Listening and understanding all customer needs is our top priority. We are always ready to answer any questions and advise customers on the services that best suit their pet's needs.</p>
        <h2>Use high quality, safe products and tools</h2>
        <p>Pawlish uses high-quality, safe shower gels and pet care tools imported from reputable countries, ensuring the health and safety of your pets.</p>
        <h1>Reasonable and competitive price</h1>
        <p>Pawlish is committed to providing customers with high quality home pet services in District 11 at reasonable prices, competitive in the market.</p>
        <ul>
          <li>Transparent and clear price list: Pawlish publishes a transparent and clear service price list, helping customers easily choose the service that suits their needs.</li>
          <li>Attractive promotions: Pawlish regularly has attractive promotions, helping customers save costs when using the service.</li>
        </ul>
        <h1>Pawlish – Reputable, professional and very trustworthy</h1>
        <img src="https://media.istockphoto.com/id/1276788283/photo/young-woman-with-laughing-corgi-puppy-nature-background.jpg?s=612x612&w=0&k=20&c=nOiBnVA13BupVn0t7o5fCytV5ZROgNgSWkQas3IuHIw=" style="width: 900px, height:auto" />
        <p>Pawlish has been trusted and chosen by many customers over the past time. We always strive to bring customers the best pet services at home in District 11, ensuring customer satisfaction.</p>
        <ul>
        <li>Long-term experience: With more than 5 years of experience in the pet service industry, Pawlish has accumulated valuable experience, helping us to increasingly improve our services, better meeting the needs of customers.</li>
        <li>Professional, dedicated staff: Pawlish's staff is well-trained, professional, dedicated, and always puts the interests of customers first.</li>
        <li>Positive feedback from customers: Pawlish always receives positive feedback from customers. Customers appreciate Pawlish's professionalism, dedication and thoughtfulness.</li>
        </ul>
        <h1>Conclude</h1>
        <p>Pawlish – Pet service at home in District 11, is a trusted address for you when you want to take care of your pets professionally, dedicatedly and effectively. We are committed to bringing your pets the best services, helping them stay healthy, happy and joyful.</p>
        <p>Please contact Pawlish immediately for advice and support on services:</p>

        <!-- Contact -->
        <ul>
        <li>Hotline 24/7: 0987 654 321</li>
        <li>Facebook: Pawlish - Pet service at home</li>
        <li>Address: Long Thanh My, Thu Duc, Ho Chi Minh City</li>
        </ul>

        <!-- social links -->
        <div style="display:flex ;flex-direction:row;align-items:center;gap:10px; margin-top: 20px">
          <div style="display: flex; align-items: center; background-color: #4267B2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span style="font-size: 12px;">FACEBOOK</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #1DA1F2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span style="font-size: 12px;">TWITTER</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #0077B5; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span style="font-size: 12px;">LINKEDIN</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #E60023; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"/></svg>
            <span style="font-size: 12px;">PINTEREST</span>
          </div>
        </div>
        
        <!-- author -->
        <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f4f4f4; padding: 20px; border-radius: 10px; width: 100%;margin-top:30px">
          <div>
            <h2 style="margin: 0; color: #1f2a5a; font-weight: bold;">MAI LAN</h2>
            <a href="#" style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
          </div>
          <div style="width: 60px; height: 60px; border-radius: 50%; background-color: #ddd; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.865 0-7 3.135-7 7h14c0-3.865-3.135-7-7-7z"/></svg>
          </div>
        </div>

        <!-- Nav -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px dotted #ddd;margin-bottom:100px; margin-top:30px">                      
          <!-- Previous Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <span style="font-size: 20px;">&#9664;</span>
            <div>
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">BACK</h3>
              <a href="#" style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a href="#" style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
      `
    },
    2: {
      id: 2,
      title: 'Pet service at home District 12: Peace of mind for pets',
      description: 'When life gets busy, taking care of your pet also needs to be flexible and convenient.',
      date: '14/03/2025',
      time: '09:15 AM',
      author: 'Michael Chen',
      comments: 'No comments',
      image: 'https://www.atozvet.com/wp-content/uploads/2017/07/Prevention-and-Treatment-For-Pet-Disease-Midland-TX-scaled.jpg',
      content: `
        <p>As life gets busier, pet care also needs to be flexible and convenient. Pawlish's District 12 home pet service offers the perfect solution, helping you save time while still ensuring your pet receives comprehensive care. At Pawlish, we are committed to providing high-quality home pet services at reasonable prices, bringing peace of mind to both "Sen" and "Boss".</p>
        <h1>Outstanding benefits of pet services at home</h1>
        <h2>Convenient and time saving</h2>
        <p>Pawlish's District 12 home pet service saves you travel time and reduces stress for your pet when having to leave their familiar environment. Instead of having to take your pet to a care facility, you just need to make an appointment and our team will come to your place to provide the service.</p>
        <h2>Safe and convenient</h2>
        <img src="https://images.ctfassets.net/scac5p2hkp4h/2NlSyerIeaBo1kKSHvgaAU/651ab328e55267ffb288fee91b175d57/aap-inline-brown-cats-british-shorthair.jpg" style="width: 900px, height:auto" />
        <p>We are committed to providing the safest and most comfortable environment for your pet. Pet services at home in District 12 help pets feel more comfortable and reduce anxiety. The products and equipment we use are carefully selected, ensuring safety and effectiveness during the care process.</p>
        <h2>Professional and attentive</h2>
        <p>Pawlish's staff are well-trained, experienced, use high-quality products, always closely monitor your pet's health and report promptly to you. Diverse services, meeting all customer needs, from bathing, drying, brushing, trimming, to health care, ...</p>
        <h2>Cost savings</h2>
        <p>Compared to taking your pet to a spa or hotel, home services are often more competitively priced. You can save on travel, food, and lodging costs for your pet.</p>
        <h2>Keep your pets healthy and happy</h2>
        <p>Pets are well cared for, kept clean, fed well, given playtime and exercise, reducing the risk of disease. This helps them stay healthy, happy and joyful by your side.</p>
        <h1>Pawlish's District 12 Pet Service at Home</h1>
        <p>At Pawlish, we understand that every pet has its own needs and preferences. Therefore, we provide personalized pet care services in District 12 to meet the exact requirements of each customer.</p>
        <h2>Bath, blow dry, brush at home</h2>
        <ul>
          <li>Use specialized shampoos suitable for each type of pet.</li>
          <li>Brush carefully, remove loose hair, keep pets clean and fragrant.</li>
          <li>Dry fur with a specialized dryer, ensuring safety for pets.</li>
        </ul>
        <h2>Trim and style hair as required</h2>
        <img src="https://www.catster.com/wp-content/uploads/2024/01/fluffy-white-Persian-cat-lying-on-pet-grooming-table-while-getting-a-new-haircut_Siam-Stock_Shutterstock.jpg" style="width: 900px, height:auto" />
        <ul>
        <li>Trim hair according to customer's request, create beautiful style, suitable for each type of pet.</li>
        <li>Use professional scissors and tools to ensure pet safety.</li>
        </ul>
        <h2>Health care services</h2>
        <ul>
        <li>Clean eyes and ears, trim nails...</li>
        <li>Support in handling emergency situations such as: Pets vomiting, diarrhea, etc.</li>
        </ul>
        <p>In addition, Pawlish also provides other services such as:</p>
        <p>Providing pet products and accessories: Food, toys, clothes, cages...</p>
        <p>Pet transportation service: Pick up and drop off pets to spas, hotels…</p>
        <p>Pawlish Pet Hotel: Designed with full amenities, ensuring a clean, airy, safe environment for your pet.</p>
        <h1>Connect and support customers at Pawlish</h1>
        <h2>Promotions and offers</h2>
        <p>Preferential service packages: To bring the best value to customers, Pawlish regularly updates preferential service packages and special promotions. You can choose comprehensive service packages at reasonable prices to save costs while still receiving the best quality of care.</p>
        <p>New Sign Up Offer: We also have a special offer for new customers who sign up for our District 12 Pet Care Service for the first time. This is a great opportunity for you to experience our pet care service at home at a discounted price.</p>
        <h2>Enthusiastic customer support</h2>
        <img src="https://www.revelationpets.com/hs-fs/hubfs/istockphoto-1516239450-612x612.jpg?width=612&height=408&name=istockphoto-1516239450-612x612.jpg" style="width: 900px, height:auto" />
        <p>Pawlish is committed to providing dedicated customer support to answer any questions and handle emergencies. Pet Service's staff is always ready to listen and support customers anytime, anywhere.</p>
        <h1>Conclude</h1>
<p>Pawlish's District 12 home pet service not only brings you convenience and peace of mind, but also ensures that your pet receives the best quality care. With a dedicated team of experts, personalized service, and attractive promotions, we are committed to providing a great care experience for your pet.</p>
<p>Contact us today to experience the most perfect District 12 home pet service and take the best care of your pet!</p>
<!-- Contact -->
        <ul>
        <li>Hotline 24/7: 0987 654 321</li>
        <li>Facebook: Pawlish - Pet service at home</li>
        <li>Address: Long Thanh My, Thu Duc, Ho Chi Minh City</li>
        </ul>

        <!-- social links -->
        <div style="display:flex ;flex-direction:row;align-items:center;gap:10px; margin-top: 20px">
          <div style="display: flex; align-items: center; background-color: #4267B2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span style="font-size: 12px;">FACEBOOK</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #1DA1F2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span style="font-size: 12px;">TWITTER</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #0077B5; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span style="font-size: 12px;">LINKEDIN</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #E60023; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"/></svg>
            <span style="font-size: 12px;">PINTEREST</span>
          </div>
        </div>
        
        <!-- author -->
        <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f4f4f4; padding: 20px; border-radius: 10px; width: 100%;margin-top:30px">
          <div>
            <h2 style="margin: 0; color: #1f2a5a; font-weight: bold;">MAI LAN</h2>
            <a href="#" style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
          </div>
          <div style="width: 60px; height: 60px; border-radius: 50%; background-color: #ddd; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.865 0-7 3.135-7 7h14c0-3.865-3.135-7-7-7z"/></svg>
          </div>
        </div>

        <!-- Nav -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px dotted #ddd;margin-bottom:100px; margin-top:30px">                      
          <!-- Previous Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <span style="font-size: 20px;">&#9664;</span>
            <div>
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">BACK</h3>
              <a href="#" style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a href="#" style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
      `
    },
    3: {
      id: 3,
      title: 'Pet service at home in Go Vap: Prestige, quality',
      description: "Is your pet itchy or smelly and you don't know what to do? Let Pawlish help!",
      date: '14/03/2025',
      time: '11:45 AM',
      author: 'Emma Wilson',
      comments: 'No comments',
      image: 'https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_1280.jpg',
      content: `
        <p>Is your pet itchy or smelly and you don't know what to do? Let Pawlish help you solve the problem right at home! We provide pet services at home in Go Vap, providing fast and professional solutions. With over 5 years of experience, we take care of every detail from health checks to handling your pet's daily problems. You don't have to worry about moving your pet or finding a busy time; just make an appointment, and our team will come to your place to care for and ensure the best health for your pet.</p>
        <h1>The harmful effects of not bathing pets regularly</h1>
        <p>Taking care of your pets at home can pose many risks, affecting their health and safety. In the context of pet services at home in Go Vap becoming increasingly popular, not bathing and cleaning your pets regularly can lead to many serious consequences:</p>
        <h2>Causes unpleasant odor</h2>
        <p>Pet hair is covered with dirt and sweat, creating conditions for bacteria to grow, causing unpleasant odors. This not only affects your living environment but also makes pets feel uncomfortable, self-conscious, affecting their psychology and behavior.</p>
        <h2>Causes skin disease</h2>
        <p>Dirt, sweat, and bacteria accumulated on the skin can cause dermatitis, skin fungus, skin allergies, etc. These diseases make pets itchy, uncomfortable, and even cause skin damage, affecting their health and aesthetics.</p>
        <h2>Causes ear and eye diseases</h2>
        <img src="https://imageio.forbes.com/specials-images/imageserve/65296673d855f34967f98bd7/Golden-Retriever-and-British-Shorthair-accompany-their-owner/0x0.jpg?format=jpg&crop=2427,1137,x0,y0,safe&width=960" style="width: 900px, height:auto" />
        <p>Failure to clean your pet's ears and eyes regularly can lead to infections that can affect your pet's vision and hearing. Ear and eye infections can cause pain, discomfort, and even blindness or deafness.</p>
        <h2>Causes dental disease</h2>
        <p>Bacteria that accumulate in the mouth can cause gingivitis, tooth decay, bad breath, etc. These diseases not only cause pain and discomfort to pets when eating and drinking, but also affect their overall health.</p>
        <h2>Causes gastrointestinal disease</h2>
        <p>Bacteria and parasites can enter the pet's body through the digestive tract, causing diarrhea, vomiting, etc. These diseases cause pets to become weak, dehydrated, and affect their health and development.</p>
        <p>To avoid these problems and ensure optimal health for your pet, consider using Pet Service's Go Vap home pet service, where we provide high-quality on-site care services.</p>
        <h1>Pawlish's Go Vap Pet Service at Home</h1>
        <p>Pawlish provides full range of pet services at home in Go Vap, meeting all customer needs:</p>
        <ul>
        <li>Bathing and grooming: Pawlish uses specialized shampoos and conditioners, selected for each pet's skin and coat type, to ensure maximum safety and the best care. These products not only clean but also protect the pet's sensitive skin, while making the coat softer and easier to comb. Bathing and grooming are performed by experienced professionals, helping to minimize tangles and skin irritation.</li>
        <li>Nail Trimming: Our team performs nail trimming meticulously and precisely to avoid causing any damage to the sensitive blood vessels inside the nail. We use specialized tools and safe trimming techniques, ensuring your pet’s nails are trimmed properly without causing pain or bleeding.</li>
        </ul>
        <img src="https://media.baamboozle.com/uploads/images/61640/1617187543_362603.jpeg" style="width: 900px, height:auto" />
        <ul>
        <li>Ear cleaning: Performed with extreme care, using specialized, non-irritating cleaning products. This procedure helps remove dirt, earwax, and other potential sources of infection, and prevents conditions such as ear infections and conjunctivitis.</li>
        <li>Walking: Our staff will use appropriate leashes and equipment, and follow safety rules to avoid pets getting lost or having unwanted incidents.</li>
        <li>Products and accessories: Pawlish offers a wide range of high-quality products and accessories, from food, toys to pet care tools. All products are carefully selected to meet the needs and preferences of pets, while providing the best value for customers.</li>
        </ul>
        <h1>Why should you choose Pawlish's Go Vap home pet service?</h1>
        <p>Pawlish is proud to be a reputable and quality pet service at home in Go Vap, trusted and chosen by many customers. We bring you outstanding benefits:</p>
        <ul>
        <li>Experienced team of experts: Pawlish's team of experts are well-trained, experienced and highly skilled, ensuring safe and effective pet services at home in Go Vap.</li>
        <li>Use professional products and tools: Pawlish uses professional products and tools that are quality tested to ensure safety for pets.</li>
        </ul>
        <img src="https://www.dailypaws.com/thmb/oCZf5BxA21N-Wed7oJ5xBHC7lTA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hokkaido-264444976-2000-1c4d1e2ef85c4300b9cfd5cc6883b27b.jpg" style="width: 900px, height:auto"/>
        <ul>
        <li>Providing diverse services: Pawlish provides a full range of home pet care services, meeting all customer needs.</li>
        <li>Always put the interests of pets first: Pawlish always puts the interests of pets first, providing them with the best care services.</li>
        </ul>
        <h1>Conclude</h1>
        <p>Pawlish's Go Vap home pet service offers the perfect combination of convenience and quality care. We understand that busy lives can make it difficult to care for your pet, so we offer an in-home solution that ensures your pet is always cared for with care and professionalism. With a team of experienced staff, Pawlish is committed to providing in-home service with dedication and care. Don't let your busy life get in the way of caring for your pet.</p>
        <p>Contact us today to schedule and experience the most convenient and quality pet service at home in Go Vap.</p>
        <ul>
        <li>Hotline 24/7: 0987 654 321</li>
        <li>Facebook: Pawlish - Pet service at home</li>
        <li>Address: Long Thanh My, Thu Duc, Ho Chi Minh City</li>
        </ul>

        <!-- social links -->
        <div style="display:flex ;flex-direction:row;align-items:center;gap:10px; margin-top: 20px">
          <div style="display: flex; align-items: center; background-color: #4267B2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span style="font-size: 12px;">FACEBOOK</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #1DA1F2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span style="font-size: 12px;">TWITTER</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #0077B5; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span style="font-size: 12px;">LINKEDIN</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #E60023; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"/></svg>
            <span style="font-size: 12px;">PINTEREST</span>
          </div>
        </div>
        
        <!-- author -->
        <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f4f4f4; padding: 20px; border-radius: 10px; width: 100%;margin-top:30px">
          <div>
            <h2 style="margin: 0; color: #1f2a5a; font-weight: bold;">MAI LAN</h2>
            <a href="#" style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
          </div>
          <div style="width: 60px; height: 60px; border-radius: 50%; background-color: #ddd; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.865 0-7 3.135-7 7h14c0-3.865-3.135-7-7-7z"/></svg>
          </div>
        </div>

        <!-- Nav -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px dotted #ddd;margin-bottom:100px; margin-top:30px">                      
          <!-- Previous Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <span style="font-size: 20px;">&#9664;</span>
            <div>
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">BACK</h3>
              <a href="#" style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a href="#" style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
      `
    },
    4: {
      id: 4,
      title: 'Pet service at home in Binh Thanh district: Prestige, quality',
      description: 'Too much work and lack of time can prevent you from taking proper care of your pet.',
      date: '01/08/2024',
      time: '02:30 PM',
      author: 'David Lee',
      comments: 'No comments',
      image: 'https://kimipet.vn/wp-content/uploads/2021/07/cach-cat-long-cho-bang-tong-do.jpg',
      content: `
        <p>With a busy schedule and lack of time, you may not be able to properly care for your pets, which can put them at risk for health and well-being. Self-care at home without professional knowledge can cause many problems such as stress, poor hygiene, and even unwanted illnesses. Let Pawlish help you solve these worries with our top-notch pet care services at home in Binh Thanh District. We provide dedicated and professional care right in your home, helping to ensure the health and happiness of your pets without any additional worries.</p>
        <h1>Disadvantages of not using pet services at home</h1>
        <p>When not using home pet services in Binh Thanh district, taking care of pets at home can bring many risks, affecting their health and safety. Here are some typical difficulties:</p>
        <h2>Time consuming and laborious</h2>
        <p>Pet care is a job that requires a lot of time and effort. From bathing, brushing, trimming nails, cleaning ears and eyes to taking them for a walk,… all require patience and professional skills.</p>
        <img src="https://c4.wallpaperflare.com/wallpaper/891/229/295/dog-mammal-labrador-retriever-nose-wallpaper-preview.jpg" style="width: 900px, height:auto" />
        <p>For busy people, taking care of pets at home becomes a burden, affecting time for work, family and other activities. Pawlish's home pet service in Binh Thanh District helps solve this problem, providing professional and convenient care right in your home.</p>
        <h2>Impact on pet health</h2>
        <p>Lack of knowledge and care skills can lead to many health problems for pets, including:</p>
        <ul>
        <li>Skin diseases: Not cleaning skin and hair regularly can lead to skin fungus, dermatitis, allergies...</li>
        <li>Parasites: Parasites such as ticks, lice, and fleas can cause itching, discomfort, and even transmit diseases to pets.</li>
        <li>Ear and eye diseases: Not cleaning ears and eyes regularly can lead to infections, affecting your pet's vision and hearing.</li>
        <li>Stress: Lack of proper care and attention can cause stress in pets, leading to behavioral and health problems.</li>
        </ul>
        <p>Pawlish's Binh Thanh District home pet service helps minimize these risks by providing dedicated and professional care, ensuring the health and happiness of your pet.</p>
        <h2>Dangerous for pets</h2>
        <p>Taking care of your pets at home can be dangerous for them, especially if you don't have the experience and skills.</p>
       <ul>
       <li>Bathing: Using the wrong type of shampoo or the wrong water temperature can cause skin irritation and damage to your pet's fur.</li>
       <li>Nail trimming: Improper nail trimming can damage blood vessels, causing bleeding in your pet.</li>
       <li>Ear hygiene: Using the wrong tools or not cleaning them properly can damage the ear and cause infection.</li>
       <li>Walking: Not controlling your pet well when walking can lead to your pet getting lost or having an accident.</li>
       </ul>
<p>Not having time to care for your pet or not meeting their needs can lead to pet neglect, lack of attention, and affect the relationship between you and your pet.</p>
<p>Pawlish's home pet service in Binh Thanh District not only provides professional pet care but also helps strengthen the bond between you and your pet.</p>
<h1>Benefits of using pet services at home</h1>
<p>Using pet services at home in Binh Thanh district brings many benefits to you and your pet, helping you solve difficult problems in pet care:</p>
<h2>Save time and effort</h2>
<p>You can spend time on work, family and other activities, instead of spending hours taking care of your pet.</p>
<h2>Ensure the health and safety of your pets</h2>
<img src="https://www.catster.com/wp-content/uploads/2023/11/Cat-groming-a-kitten-in-the-garden_Peter-Iulian_Shutterstock.jpg" style="width: 900px, height:auto" />
<p>Pawlish specialists are well-trained, experienced and use professional products and tools, ensuring safety and effectiveness for pets.</p>
<ul>
<li>Bathing: Specialists use specialized shower gels, suitable for each type of pet's skin and fur, ensuring safety and effectiveness.</li>
<li>Nail trimming: Technicians use professional tools to trim nails carefully to avoid damaging the skin.</li>
<li>Ear and eye hygiene: Specialists use specialized cleaning solutions to carefully clean ears and eyes to avoid infection.</li>
<li>Walking: Experts walk pets safely, with good control, to avoid pets getting lost or having accidents.</li>
</ul>
<h2>Bringing the best experience to pets</h2>
<p>Pawlish uses modern, gentle pet care methods to keep pets comfortable and happy.</p>
<ul>
<li>Pet Spa: Specialists use professional massage and grooming techniques to help pets relax and reduce stress.</li>
<li>Pet Hotel: Pawlish provides professional pet hotel services, with full facilities, ensuring safety and comfort for pets.</li>
</ul>
<h2>Helps you understand your pets better</h2>
<p>With pet services at home in Binh Thanh district, Pawlish experts can advise you on pet care, health issues, nutrition, behavior... to help you better understand your pet.</p>
<h1>Pawlish's Pet Service at Home in Binh Thanh District</h1>
<img src="https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474596pOF/boss-spa-grooming-1010471.jpg" style="width: 900px, height:auto" />
<p>Pawlish provides full range of pet services at home in Binh Thanh district, meeting all customer needs:</p>
<ul>
<li>Bathing and grooming: Use specialized shower gels suitable for each type of pet's skin and fur, ensuring safety and effectiveness.</li>
<li>Nail trimming: Trim nails carefully, avoiding skin damage.</li>
<li>Ear and eye hygiene: Clean ears and eyes carefully to avoid infection.</li>
<li>Walking: Walk your pet safely, with good control, to avoid pets getting lost or having accidents.</li>
<li>Providing pet products and accessories: Providing high quality pet products and accessories, suitable for customer needs.</li>
</ul>
<h1>Pawlish Pet Care Team Expert Opinion</h1>
<p>With over 5 years of experience in the home pet service industry in Binh Thanh district, Pawlish's pet care team has accumulated a lot of experience and professional knowledge.</p>
<p>We always update the latest knowledge about pet care, use modern care methods, ensure safety and effectiveness for pets.</p>
<p>We understand that each pet has its own characteristics and needs to be cared for appropriately. Therefore, we always take the time to listen to our customers' needs and provide the most suitable care solutions for your pet.</p>
<h1>Conclude</h1>
<p>Using Pawlish's home pet service in Binh Thanh district is the optimal solution for busy people who do not have time to take care of their pets. Pawlish is committed to providing you with professional, reputable, quality services, ensuring the health and safety of your pets.</p>
<p>Contact Pawlish now for consultation and service appointment booking!</p>

        <ul>
        <li>Hotline 24/7: 0987 654 321</li>
        <li>Facebook: Pawlish - Pet service at home</li>
        <li>Address: Long Thanh My, Thu Duc, Ho Chi Minh City</li>
        </ul>

        <!-- social links -->
        <div style="display:flex ;flex-direction:row;align-items:center;gap:10px; margin-top: 20px">
          <div style="display: flex; align-items: center; background-color: #4267B2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
            <span style="font-size: 12px;">FACEBOOK</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #1DA1F2; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            <span style="font-size: 12px;">TWITTER</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #0077B5; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            <span style="font-size: 12px;">LINKEDIN</span>
          </div>
          <div style="display: flex; align-items: center; background-color: #E60023; color: white; padding: 10px; width: 150px;height: 50px; gap: 5px;border-radius:5px">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-heart"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"/></svg>
            <span style="font-size: 12px;">PINTEREST</span>
          </div>
        </div>
        
        <!-- author -->
        <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f4f4f4; padding: 20px; border-radius: 10px; width: 100%;margin-top:30px">
          <div>
            <h2 style="margin: 0; color: #1f2a5a; font-weight: bold;">MAI LAN</h2>
            <a href="#" style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
          </div>
          <div style="width: 60px; height: 60px; border-radius: 50%; background-color: #ddd; display: flex; justify-content: center; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#fff" viewBox="0 0 24 24"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.865 0-7 3.135-7 7h14c0-3.865-3.135-7-7-7z"/></svg>
          </div>
        </div>

        <!-- Nav -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-top: 1px dotted #ddd;margin-bottom:100px; margin-top:30px">                      
          <!-- Previous Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <span style="font-size: 20px;">&#9664;</span>
            <div>
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">BACK</h3>
              <a href="#" style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a href="#" style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
      `
    }
  };

  const post = posts[Number(id) as keyof typeof posts] || posts[1];

  return (
    <div>
      <TopBar />
      <Header />
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[500px] object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-blue-200 bg-opacity-50 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto absolute inset-0 rounded-lg flex flex-col justify-center text-white p-8">
          <h1 className="text-5xl font-bold text-left mb-4 ">{post.title}</h1>
          <div className="flex items-center space-x-4 text-lg">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.time}</span>
            <span>•</span>
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
      <div className="py-8 max-w-4xl mx-auto">
        <div
          className="prose max-w-none mt-8 [&>h1]:text-[55px] [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-[30px] [&>h2]:font-bold [&>h2]:mb-4 [&>p]:text-[17px] [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:mb-4 [&>ul>li]:ml-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Footer />
    </div>
  );
} 