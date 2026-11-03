import React, { useState, useRef, useMemo } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  certifications,
  certificatesFolderUrl,
  certificationCategories,
} from '../data/certificationsData';
import { FiAward, FiCalendar, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
import { FaGoogleDrive } from 'react-icons/fa';
import '../styles/certifications.css';

const ease = [0.16, 1, 0.3, 1];

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filteredCerts = useMemo(() => {
    if (selectedCategory === 'All') return certifications;
    return certifications.filter((cert) => cert.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="certifications" ref={ref} aria-label="Professional Certifications">
      {/* Section Header */}
      <div className="cert-header-wrap">
        <div>
          <span className="sec-overline">Credentials & Learning</span>
          <h2 className="sec-heading">
            Professional <span className="hl">Certifications</span>
          </h2>
        </div>

        {/* Google Drive Folder Shortcut */}
        <a
          href={certificatesFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-drive-badge"
          aria-label="View all certificates on Google Drive (opens in new tab)"
        >
          <FaGoogleDrive className="cert-drive-icon" aria-hidden="true" />
          <div className="cert-drive-text">
            <span className="cert-drive-title">Google Drive Repository</span>
            <span className="cert-drive-sub">Browse all certificates & documents</span>
          </div>
          <FiExternalLink className="cert-drive-ext" aria-hidden="true" />
        </a>
      </div>

      {/* Filter Categories */}
      <div className="cert-filters" role="tablist" aria-label="Filter certifications by category">
        {certificationCategories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={selectedCategory === cat}
            className={`cert-filter-btn${selectedCategory === cat ? ' cert-filter-btn--active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
            <span className="cert-filter-count" aria-hidden="true">
              {cat === 'All'
                ? certifications.length
                : certifications.filter((c) => c.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <motion.div layout className="cert-grid">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert, index) => {
            const certUrl = cert.driveUrl || certificatesFolderUrl;

            return (
              <motion.article
                key={cert.id}
                layout
                className="cert-card"
                aria-label={cert.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease }}
              >
                {/* Certificate Thumbnail Preview */}
                <div className="cert-thumb-wrap">
                  <img
                    src={cert.thumbnail}
                    alt={`${cert.title} certificate credential`}
                    className="cert-thumb-img"
                    loading="lazy"
                  />
                  <div className="cert-thumb-overlay" aria-hidden="true">
                    <a
                      href={certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-thumb-action"
                      tabIndex={-1}
                    >
                      <FiExternalLink size={16} /> Open in Drive
                    </a>
                  </div>

                  {/* Issuer badge overlay */}
                  <div className="cert-issuer-pill">
                    <span className="cert-issuer-text">{cert.issuer}</span>
                  </div>

                  {/* Verified badge */}
                  <div className="cert-verified-pill" title="Verified completion credential">
                    <FiCheckCircle size={11} aria-hidden="true" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="cert-content">
                  {/* Meta row: Date and Organization */}
                  <div className="cert-meta-row">
                    <span className="cert-date">
                      <FiCalendar size={12} aria-hidden="true" />
                      {cert.completionDate}
                    </span>
                    <span className="cert-platform">
                      <FiAward size={12} aria-hidden="true" />
                      {cert.platform}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="cert-title">{cert.title}</h3>

                  {/* Credential ID if present */}
                  {cert.credentialId && (
                    <div className="cert-credential-id">
                      <span className="cert-cid-label">ID:</span>
                      <code className="cert-cid-value">{cert.credentialId}</code>
                    </div>
                  )}

                  {/* Technology / Skill tags */}
                  <div className="cert-tags" aria-label="Skills covered">
                    {cert.tags.map((tag, ti) => (
                      <span key={ti} className="cert-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="cert-actions">
                    <a
                      href={certUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-btn-primary"
                      aria-label={`View ${cert.title} certificate in Google Drive (opens in new tab)`}
                    >
                      <span>View Certificate</span>
                      <FiExternalLink size={14} aria-hidden="true" />
                    </a>

                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-btn-secondary"
                        aria-label={`Verify ${cert.title} credential on official platform`}
                        title="Verify credential on official platform"
                      >
                        Verify
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Bottom Google Drive Info Callout */}
      <motion.div
        className="cert-footer-banner"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.35, ease }}
      >
        <div className="cert-banner-left">
          <div className="cert-banner-icon-wrap" aria-hidden="true">
            <FaGoogleDrive size={22} />
          </div>
          <div className="cert-banner-info">
            <h4 className="cert-banner-title">Direct Cloud Storage Integration</h4>
            <p className="cert-banner-desc">
              All certificates are hosted on Google Drive with public viewer permissions.
              You can inspect individual PDF documents or browse the complete certificates folder.
            </p>
          </div>
        </div>

        <a
          href={certificatesFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-banner-btn"
          aria-label="Open main Google Drive certificates folder (opens in new tab)"
        >
          <FaGoogleDrive size={15} aria-hidden="true" />
          <span>Open Full Drive Folder</span>
          <FiExternalLink size={13} aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
};

export default Certifications;

