import Footer from '@/components/commons/Footer';
import { Header } from '@/components/commons/Header';
import TopBar from '@/components/commons/TopBar';
import { useParams } from 'react-router-dom';


export default function BlogPostDetailEnt() {
  const { id } = useParams();
  
  // This would typically come from an API call
  const posts = {
    1: {
      id: 1,
      title: 'What does the cat\'s sleep position say?',
      description: 'Through the cat\'s sleep position, you can guess the "mysterious" messages that these little ones want to convey.',
      date: '06/08/2024',
      time: '10:00 AM',
      author: 'Maria Garcia',
      comments: 'No comments',
      image: 'https://d2zp5xs5cp8zlg.cloudfront.net/image-61162-800.jpg',
      content: `
        <p>Through the way cats sleep, you can guess the "mysterious" messages they are trying to convey!</p>
        <p>Let's find out with Pawlish right after this!</p>
        <h1>1 Two hands holding head</h1>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/10/1.jpg" style="width: 900px; height: auto;" />
        <p>This is probably the most common “sleeping style” that any cat owner has ever seen, the cat curls up, while using both hands to cover more than half of its face. In this state, your cat has clearly shown its sense of self-defense, that it does not want to be disturbed, whether by scratching its head or petting. You can also understand it as: “Sleeping, do not disturb!”</p>
        <h1>2 Lie on your back facing the sky</h1>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/10/2.jpg" style="width: 900px; height: auto;" />
        <p>This pose is voted as the “cutest” by many cat lovers! The belly is a sensitive area of ​​the cat, and when it agrees to “show its belly” to you. That means the cat trusts and loves you very much! When you see this look of your cat, don’t hesitate to give it a few gentle strokes.</p>
        <h1>3 Lie in groups and hug each other</h1>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/10/3.jpg" style="width: 900px; height: auto;" />
        <p>This is also one of the common sleeping positions of cats, especially for those who have 2-3 or more. When sleeping soundly, many cats will tend to lie on top of each other, even cuddling each other. In this case, the message they want to send to you is: "We love each other except you."</p>
        <h1>4 "salt dipping" positions</h1>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/06/image-14.png" style="width: 900px; height: auto;" />
        <p>Your cat is lying on its stomach, but its eyes are closed and its head is facing the ground. This sleeping position is common when cats are dozing off or are so tired that they fall asleep. This sleeping position is a way for cats to tell you that they are tired and that they would appreciate it if you could provide a comfortable place for them to lie down.</p>
        <h1>5 Some Facts About Cat Sleep</h1>
        <ul>
        <li>Sleepiness is in cats' nature, they can sleep up to 16-20 hours a day.</li>
        <li>Sleeping helps cats regain energy for daily activities such as hunting, playing...</li>
        <li>¾ of a cat's sleep is considered a nap, or nap.</li>
        <li>Even while sitting, cats can sleep.</li>
        <li>When cats sleep the deepest, they are curled up with their eyes closed.</li>
        </ul>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/10/ngu.jpg" style="width: 900px; height: auto;" />
        <ul>
        <li>Deep sleep is extremely important for cats because it helps restore and maintain health.</li>
        <li>Sometimes cats DREAMS while they sleep. A telltale sign of this is a slight twitching of the cat's whiskers or legs.</li>
        <li>Some cats have a habit of snoring, especially in Persian, Himalayan, etc. breeds.</li>
        <li>If your cat seems to be sleeping more or less than usual, it is possible that they are sick.</li>
        <li>Cats can sleep anywhere, from furniture, blankets, pillows, to your pile of old clothes!</li>
        </ul>
        <h1>Conclude</h1>
        <p>Cats' sleeping postures are not only cute but also contain many interesting messages about their emotions and comfort levels. Through cats' sleeping postures, you must have understood more about this lovely animal.</p>
        <p>Do you recognize any of your cat's sleeping positions? If so, please share their adorable stories!</p>
        <p>Contact Pawlish now for advice and the best services for your pet!</p>

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
            <a  style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
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
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
      `
    },
    2: {
      id: 2,
      title: 'How to read your dog\'s body language',
      description: 'Although the "language" is different, your dog still tries to convey emotions of joy, sadness, anger, etc.',
      date: '01/08/2024',
      time: '11:30 AM',
      author: 'John Smith',
      comments: 'No comments',
      image: 'https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg',
      content: `
        <p>Even though their “languages” are different, dogs still try to convey their feelings of joy, sadness, anger, love… to their owners through their body language expressions.</p>
        <p>Let's find out what languages ​​there are with PAWLISH!</p>
        <h1>Common Dog Body Language</h1>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/05/image-69.png" style="width: 900px; height: auto;" />
        <img src="https://petservicehcm.com/wp-content/uploads/2023/05/image-70.png" style="width: 900px; height: auto;" />
        <img src="https://petservicehcm.com/wp-content/uploads/2023/05/image-72.png" style="width: 900px; height: auto;" />
        <img src="https://petservicehcm.com/wp-content/uploads/2023/05/image-73.png" style="width: 900px; height: auto;" />
        <p>To keep that friendship lasting, we must use our love and actions to build trust in them. But first, understanding your dog’s body language is a lesson that any owner needs to remember.</p>
        <h1>PAWLISH – Contact Information</h1>
        <p>Please contact Pawlish immediately via the information below:</p>

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
            <a  style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
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
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
      `
    },
    3: {
      id: 3,
      title: 'Saluki dog - The royal dog of Egypt',
      description: 'Let\'s learn about the Saluki dog, known as the royal dog of Egypt, with PAWLISH.',
      date: '01/08/2024',
      time: '03:15 PM',
      author: 'Alex Thompson',
      comments: 'No comments',
      image: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/14/2024/01/BN3HYR.jpg',
      content: `
        <p>Let's learn about the Saluki dog breed known as the Egyptian royal dog breed with PAWLISH right after this!</p>
        <h2>1 Origin</h2>
        <p>The Saluki has been associated with humans for centuries. History records that this is one of the oldest domesticated dog breeds, and also one of the earliest animals to be domesticated by humans. This dog breed appears in Egyptian tomb paintings. It is about 2,100 years old BC. In ancient times, Salukis were used for racing because they are capable of running at speeds of 60km/h.</p>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/05/image-67.png" style="width: 900px; height: auto;" />
        <h2>2 Appearance</h2>
        <ol>
        <li>The overall appearance of this breed gives the impression of grace and balance, with good chasing ability along with endurance, strength and flexibility.</li>
        <li>Deep-set, bright, sharp eyes help Salukis easily spot and chase prey in the desert.</li>
        <li>The Saluki's ears are set close to the head, covered with long hair, and have keen hearing.</li>
        <li>Teeth and jaws are strong with complete, well-developed teeth and a scissor bite.</li>
        </ol>
        <h2>3 Fur</h2>
        <p>The Saluki's coat comes in a wide variety of colors, and there are two types of coat: short-haired and long-haired. It is believed that nomadic peoples kept two completely different breeds of Saluki. The golden and brown breeds from the burning desert sands of Syria and the black breed from the fertile lava flats of Mesopotamia. The breeds raised in northern Syria, Iraq and Iran, known as the northern breed, were bred to hunt in cold climates and developed thick skin and thick fur to withstand the harsh climate. The breeds raised in the Peninsula and Egypt, known as the southern breed, were true desert dogs, tall, long-legged and without long hair on their bodies.</p>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/05/image-68.png" style="width: 900px; height: auto;" />
        <h2>4 Personality</h2>
        <p>With their loyalty and expressiveness they have become an ideal companion pet. Not noisy and aggressive, always clean and proud. Odourless, some even have a natural scent. This is also a noble breed of dog of the Arabian people, who highly value this breed for their qualities and independence, as well as their skills, courage in hunting and loyalty to their owners.</p>
        <p>Abu Nuwas – a famous Arab poet in the 8th century also mentioned the Saluki dog in his poems:</p>
        <p>“Wherever the Saluki's gaze passes, there it flares up like a shining fire, blazing endlessly, and like an eagle spreading its wings over the desert sands, it flies across and dominates the land with its four proud feet.”</p>
        <h2>5. PAWLISH – Contact information</h2>
        <p>Please contact Pawlish immediately via the information below:</p>
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
            <a  style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
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
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
      `
    },
    4: {
      id: 4,
      title: 'Interesting things about the Pug dog breed',
      description: 'With its cute but also adorable appearance, the Pug dog has quickly won the hearts of many people.',
      date: '01/08/2024',
      time: '05:00 PM',
      author: 'Emily Brown',
      comments: 'No comments',
      image: 'https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg',
      content: `
        <p>With its small but equally adorable appearance, the Pug quickly won the hearts of many people.</p>
        <p>Let's learn interesting things about this pug breed with PAWLISH!</p>
        <h2>1 Ancient dog breed from China</h2>
        <p>“Pug” or commonly known as the pug, is a breed of dog belonging to the group of ornamental dogs originating from China. The Pug breed has been around for a long time and their origin is still a mystery. There are documents stating that the origin of the Pug is China during the Han Dynasty around 200 BC. In the 16th century, they began to be introduced to Europe and quickly became a popular breed loved by many people here. The Pug has a wrinkled face, short muzzle and curly tail.</p>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/05/image-65.png" style="width: 900px; height: auto;" />
        <h2>2 Named after a species of monkey</h2>
        <p>The name “Pug” of this breed of dog is related to a monkey, the Marmoset. The Marmoset is a species of marmoset in Central and South America. They are kept as pets and called “Pug”. This pug breed has facial features similar to the above monkey, so people used the name Pug to name it.</p>
        <h2>3 Royal Dogs</h2>
        <img src="https://petservicehcm.com/wp-content/uploads/2023/10/pug.jpg" style="width: 900px; height: auto;" />
        <p>The Pug was brought to Europe from China in the 16th century and became popular in Western Europe thanks to the Dutch House of Orange-Nassau and the House of Stuart. In the United Kingdom, in the 19th century, Queen Victoria had a great passion for Pugs and she spread it to other members of the Royal Family. Pugs are considered a noble breed because they are raised by royals and the upper class. Pugs often enjoy a luxurious and luxurious life. When introduced to Europe, they also became pets of many wealthy families.</p>
        <h2>4 Dog tails have 2 curls of hair</h2>
        <p>Pug tails are usually short and can be straight or curled up over the back. However, they look best when their tails are curled up. Many people also prefer their tails to be short and curly.</p>
        <h2>5 No nasal bone</h2>
        <p>Pugs have a short nose and lack the bone above the eye, so they are susceptible to eye injuries and eye problems such as bulging eyes, corneal scratches, and entropion.</p>
        <h2>PAWLISH – Contact information</h2>
        <p>Please contact Pawlish immediately via the information below:</p>
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
            <a  style="color: #a0a0a0; text-decoration: none; font-size: 14px;">ALL ARTICLES »</a>
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
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Husky Care Tips: Important Things to Know</a>
            </div>
          </div>

          <!-- Next Post -->
          <div style="display: flex; align-items: center; gap: 5px; color: #7f8c8d; cursor: pointer;">
            <div style="text-align: right;">
              <h3 style="margin: 0; font-size: 16px; color: #7f8c8d; font-weight: bold;">NEXT</h3>
              <a  style="text-decoration: none; color: #4a5a7a; font-size: 14px;">Top 5 Most Reputable Pet Spas in District 7, 2025</a>
            </div>
            <span style="font-size: 20px;">&#9654;</span>
          </div>
        </div>
      `
    }
  };

  const post = posts[Number(id) as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <TopBar/>
      <Header/>
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
          className="prose max-w-none mt-8 [&>h1]:text-[55px] [&>h1]:font-bold [&>h1]:mb-4 [&>h2]:text-[30px] [&>h2]:font-bold [&>h2]:mb-4 [&>p]:text-[17px] [&>p]:mb-4 [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:mb-4 [&>ul>li]:ml-5 [&>ol]:list-decimal [&>ol]:ml-5 [&>ol>li]:mb-4 [&>ol>li]:ml-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
      <Footer/>
    </div>
  );
} 