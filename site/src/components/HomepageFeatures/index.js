import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Secure and Attestable',
    description: (
      <>
        Teaclave adopts multiple security technologies to enable secure computing, in particular, 
        Teaclave uses Intel SGX to serve the most security-sensitive tasks with hardware-based isolation, memory encryption and attestation. 
        Also, Teaclave is written in Rust to prevent memory-safety issues.
      </>
    ),
  },
  {
    title: 'Function-as-a-Service',
    description: (
      <>
        Teaclave is a function-as-a-service platform supporting tasks like privacy-preserving machine learning, private set intersection, and crypto computation. 
        In addition, developers can also write and execute Python function. 
        Teaclave supports both general secure computing tasks and flexible multi-party secure computation.
      </>
    ),
  },
  {
    title: 'Ease of Use',
    description: (
      <>
        Teaclave builds its components in containers, therefore, it supports deployment both locally and within cloud infrastructures. 
        Teaclave also provides convenient endpoint APIs, client SDKs and command line tools.
      </>
    ),
  },
  {
    title: 'Flexible',
    description: (
      <>
        Components in Teaclave are designed in modular, and features like remote attestation can be easily embedded in other projects. 
        In addition, Teaclave SGX SDK, Teaclave Java TEE SDK, and Teaclave TrustZone SDK can also be used separately to write TEE apps for other purposes.
      </>
    ),
  },
];

const featureStyle = {
  features: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'stretch',
    justifyContent: 'space-between',
  },
  feature: {
    flexGrow: 1,
    flexBasis: '47%',
    maxWidth: '47%',
  }
}

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')} style={featureStyle.feature}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={featureStyle.features}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
