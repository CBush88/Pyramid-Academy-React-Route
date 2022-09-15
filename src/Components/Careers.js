import React from 'react'
import programmer from ".//img/programmer.jpeg"
import CEO from ".//img/ceo.jpg"

const Careers = () => {
  return (
<body>
    <div id="content">
        <header>
            <h1>Careers</h1>
        </header>
        <h2>What we're looking for:</h2>
        <div class="left">
            <h3>Chief Executive Officer</h3>
        <img class="career-photo" src={CEO} alt="CEO" />
        </div>
        <div class="right">
            <h4>Requirements:</h4>
                <list>
                    <li>Laboris laborum sit nisi sint quis qui ipsum aute veniam laboris <strong>adipisicing labore</strong> aliqua esse. Ullamco enim cupidatat minim culpa cillum aliqua. Tempor aute consectetur labore Lorem velit occaecat aliquip.</li>
                    <li>Eu duis et ex reprehenderit qui non aute Lorem do voluptate aliquip dolore. Ad ea fugiat cillum fugiat commodo ea deserunt eiusmod. Consectetur commodo sit laboris ex cupidatat cillum Lorem culpa. Laborum excepteur quis occaecat aute in amet nisi ea magna eiusmod duis. Eu dolore tempor irure nulla pariatur incididunt esse elit excepteur deserunt qui eiusmod. Anim dolore consectetur et mollit consectetur adipisicing tempor officia veniam sit reprehenderit cupidatat excepteur commodo. Eu esse nulla mollit voluptate deserunt sint aliqua dolore consectetur ad enim qui irure nulla.</li>
                    <li>Excepteur ad proident voluptate commodo ut adipisicing minim aute reprehenderit minim culpa <strong>ullamco aliqua aute</strong>. Ut veniam amet est ut anim commodo mollit ullamco laborum elit in eiusmod velit. Esse adipisicing nostrud reprehenderit Lorem proident. Dolore occaecat aute culpa nulla do id excepteur duis. Irure excepteur officia dolor culpa nisi occaecat voluptate do esse aliqua laborum sint. Nisi ullamco sint Lorem ipsum ut minim exercitation et amet veniam velit enim deserunt amet. Magna tempor nulla ad cillum nisi exercitation laboris tempor deserunt et dolore incididunt elit pariatur.</li>
                    <li>Occaecat enim esse in sit consequat do et veniam voluptate laborum fugiat nostrud. Laborum amet dolor elit voluptate nulla dolor consectetur adipisicing in id minim excepteur magna nulla. Culpa voluptate irure anim aute adipisicing laborum. Proident enim eu est pariatur enim magna id quis nisi pariatur eu ipsum duis. Velit et fugiat consequat elit.</li>
                    <li>Incididunt esse nisi Lorem minim. Esse reprehenderit occaecat dolore laborum occaecat. Labore ipsum esse id labore.</li>
                    <li>Aliqua laborum magna voluptate esse culpa ea do enim dolor officia ad. Sunt ex proident exercitation sunt. Adipisicing dolore sint quis sit tempor anim eiusmod. Cillum aliqua non exercitation amet ut veniam. Et anim voluptate laborum excepteur veniam sit id cupidatat. Pariatur qui non eu enim tempor incididunt proident quis reprehenderit. Magna deserunt sint velit excepteur laborum eiusmod qui adipisicing in eiusmod ullamco veniam fugiat.</li>
                    <li>Enim ipsum minim et fugiat consequat ut occaecat qui do. Reprehenderit labore sit cillum amet qui fugiat exercitation ea adipisicing nulla officia duis culpa deserunt. Occaecat dolor ad pariatur ea sint dolore officia excepteur ullamco laborum laborum nisi eiusmod cupidatat.</li>
                </list>
        </div>
        <div class="clear"></div>
        <div class="left">
            <h3>Entry Level Programmer</h3>
                <img class="career-photo" src={programmer} alt="A programmer" />
        </div>
        <div class="right">
            <h4>Requirements:</h4>
            <list>
                <li>15 years of experience.</li>
                <li>Master's degree in computer science or related field.</li>
            </list>
            <p>Experience in the following languages is <strong>required</strong> to be considered:</p>
            <list>
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>Swift</li>
                <li>C</li>
                <li>C++</li>
                <li>C#</li>
                <li>R</li>
                <li>Golang (Go)</li>
                <li>Solidity</li>
                <li>PHP</li>
                <li>Bash Scripting</li>
                <li>Perl</li>
                <li>SQL</li>
            </list>
            <p><strong>Preferred:</strong></p>
            <list>
                <li>At least 5 years experience in both the medical and financial fields.</li>
                <li>Experience designing and developing a social media site we've heard of.</li>
            </list>
            <p>Starting rate is $15/hour</p>
        </div>
        <div class="clear"></div>
    </div>
</body>
  )
}

export default Careers