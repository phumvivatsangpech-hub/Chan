# เสื่อกกจันทบูร — Style Reference
> คลี่เสื่อ อ่านเรื่องราว — ผืนกกอุ่นแดด ขอบลายไทย และครามยามค่ำแห่งลุ่มน้ำจันทบูร

**Theme:** light (warm) + dark bands (ครามราตรี) สำหรับ Hero, ส่วนเน้น และ Footer
**Target devices:** มือถือ (หลัก) → iPad แนวตั้ง → iPad แนวนอน → เดสก์ท็อป (รอง)

ระบบนี้ดัดแปลงโครงสร้างและวินัยการออกแบบจาก Mercury Style Reference ได้แก่ พื้นผิวเรียบไม่มีเงา, สีเน้นเพียงสีเดียวสำหรับปุ่มหลัก, พื้นที่ว่างกว้าง และภาพถ่ายเต็มจอเป็นตัวสร้างบรรยากาศ แล้วเปลี่ยนอัตลักษณ์ทั้งหมดเป็นงานหัตถกรรมเสื่อกกจันทบูรผสานศิลปะไทย

พื้นผิวหลักของเว็บคือ "ผืนกกธรรมชาติ" (#F3E9D2) อุ่นเหมือนเสื่อที่ตากแดด เนื้อหาวางบน "การ์ดผืนเสื่อ" สีครีมที่สว่างกว่าพื้นหนึ่งระดับ แยกชั้นด้วยค่าสีและขอบเส้นคู่แบบริมเสื่อ ไม่ใช้เงา ตัวอักษรหลักเป็นครามเข้ม ส่วนแดงชาด (#A3302A) เป็นสีเดียวที่ใช้กับปุ่มกดหลัก ลวดลายแบ่งสองบทบาท: **ลายสานเสื่อกก** (ลายขัด, ลายสอง) เป็นพื้นผิวและตัวคั่น ส่วน **ลายไทย** (ประจำยาม, กรวยเชิง, ดอกพิกุล) เป็นเครื่องประดับกรอบ หัวข้อ และไอคอน ใช้อย่างประณีตและน้อยแต่มีความหมาย ภาพจริงจากแหล่งข้อมูลเป็นพระเอกของทุก section

---

## Tokens — Colors

> ค่า hex เป็นจุดเริ่มต้นที่ได้แรงบันดาลใจจากสีกกธรรมชาติและสีย้อมเสื่อ ควรเทียบกับภาพเสื่อจริงจากแหล่งข้อมูลแล้วปรับให้ใกล้เคียง โดยต้องรักษาคู่ contrast ตามตารางด้านล่าง

| Name | Value | Token | Role |
|------|-------|-------|------|
| ผืนกก (Kok Canvas) | `#F3E9D2` | `--color-kok-canvas` | พื้นหลังหลักของหน้า (เทียบ Onyx Canvas) |
| ครีมเสื่อใหม่ (Mat Card) | `#FBF6EA` | `--color-mat-card` | การ์ดและพื้นผิวเนื้อหา สว่างกว่าพื้นหนึ่งระดับ (เทียบ Graphite Card) |
| กกแห้ง (Dry Reed) | `#E6D5AE` | `--color-dry-reed` | พื้นผิวยุบ แท็ก ช่องแผนที่ แถบ placeholder (เทียบ Obsidian Button) |
| เส้นกก (Reed Line) | `#B89A5E` | `--color-reed-line` | เส้นคั่นและขอบโครงสร้าง |
| ครามเข้ม (Kram Ink) | `#1F2A44` | `--color-kram-ink` | ตัวอักษรหลัก ไอคอน เส้นขอบปุ่มรอง (เทียบ Ivory Text) |
| น้ำตาลหม่น (Umber Text) | `#5C4A32` | `--color-umber-text` | ตัวอักษรรอง คำบรรยายภาพ เครดิต (เทียบ Ash Text) |
| แดงชาด (Chad Red) | `#A3302A` | `--color-chad-red` | **สีเดียวสำหรับปุ่มหลัก** สถานะเมนูที่เลือก และหัวข้อใหญ่ (เทียบ Cobalt) |
| เขียวใบกก (Reed Green) | `#4E6B3A` | `--color-reed-green` | แท็กหมวดหมู่ ลิงก์ในเนื้อหา และสีในลวดลาย |
| ทองคำเปลว (Leaf Gold) | `#B8860B` | `--color-leaf-gold` | เส้นประดับลายไทยเท่านั้น ใช้เป็นตัวอักษรได้เฉพาะบนพื้นครามราตรี |
| ครามราตรี (Night Kram) | `#16223A` | `--color-night-kram` | แถบมืด: overlay ของ Hero, Footer, section เน้น |
| งาช้าง (Ivory Thai) | `#F7EFDD` | `--color-ivory-thai` | ตัวอักษรบนพื้นครามราตรีและบนปุ่มแดงชาด |

### คู่สีที่อนุญาต (ตรวจตาม WCAG แล้ว)

| ตัวอักษร / พื้น | ประมาณ contrast | ใช้กับ |
|---|---|---|
| ครามเข้ม / ผืนกก | ~11.8:1 | เนื้อหาทั้งหมด |
| น้ำตาลหม่น / ผืนกก | ~6.9:1 | ข้อความรอง คำบรรยายภาพ |
| แดงชาด / ผืนกก | ~5.7:1 | หัวข้อ section |
| เขียวใบกก / ผืนกก | ~4.9:1 | ลิงก์ แท็ก (ขนาด ≥16px) |
| งาช้าง / แดงชาด | ~6.6:1 | ข้อความบนปุ่มหลัก |
| งาช้าง / ครามราตรี | ~13.8:1 | ข้อความบนแถบมืด |
| ทองคำเปลว / ครามราตรี | ~4.9:1 | หัวข้อและเส้นประดับบนแถบมืด |
| ❌ ทองคำเปลว / ผืนกก | ~2.7:1 | **ห้ามใช้เป็นตัวอักษร** ใช้เป็นเส้นประดับเท่านั้น |

---

## Tokens — Typography

### Chonburi — Display (ไทยมีหัว อารมณ์ดั้งเดิม) · `--font-display`
- **Source:** Google Fonts
- **Weights:** 400 (มีน้ำหนักเดียว)
- **Sizes:** 32px (มือถือ) → 44px (iPad) → 56px (iPad แนวนอน/เดสก์ท็อป)
- **Line height:** 1.35
- **Role:** ใช้เฉพาะชื่อเว็บใน Hero และหัวข้อ section ระดับ H2 เท่านั้น ไม่ใช้กับข้อความยาว

### Noto Serif Thai — Heading · `--font-heading`
- **Source:** Google Fonts (variable 100–900)
- **Weights:** 500 (หัวข้อทั่วไป), 600 (ชื่อลาย ชื่อขั้นตอน)
- **Sizes:** 20px, 22px, 26px
- **Line height:** 1.45
- **Role:** H3/H4 หัวการ์ด ชื่อขั้นตอน ชื่อลาย ใช้น้ำหนักกลาง ๆ แบบเดียวกับ Mercury ที่ใช้ 480 คือหนักแน่นแต่ไม่ตะโกน

### Sarabun — Body & UI (ไทยมีหัว อ่านง่ายบนจอเล็ก) · `--font-body`
- **Source:** Google Fonts
- **Weights:** 400 (เนื้อหา), 500 (ปุ่ม เมนู ป้าย), 600 (ตัวเน้นในเนื้อหา)
- **Sizes:** 13px, 15px, 17px, 19px
- **Line height:** 1.8 (เนื้อหา), 1.5 (ปุ่ม/เมนู)
- **Role:** เนื้อหา คำบรรยายภาพ เมนู ปุ่ม ป้าย

### Type Scale (Mobile-first)

| Role | Family | Weight | Mobile | iPad (≥768) | iPad landscape (≥1024) | Line Height | Token |
|------|--------|--------|--------|-------------|------------------------|-------------|-------|
| caption | Sarabun | 400 | 13px | 14px | 14px | 1.6 | `--text-caption` |
| body-sm | Sarabun | 400 | 15px | 16px | 16px | 1.7 | `--text-body-sm` |
| body | Sarabun | 400 | 17px | 18px | 18px | 1.8 | `--text-body` |
| body-lg | Sarabun | 400 | 19px | 20px | 21px | 1.75 | `--text-body-lg` |
| heading-sm | Noto Serif Thai | 600 | 20px | 22px | 22px | 1.45 | `--text-heading-sm` |
| heading | Noto Serif Thai | 500 | 22px | 26px | 28px | 1.45 | `--text-heading` |
| section-title | Chonburi | 400 | 28px | 36px | 40px | 1.35 | `--text-section` |
| display | Chonburi | 400 | 32px | 44px | 56px | 1.35 | `--text-display` |

> **กฎภาษาไทย:** line-height ของภาษาไทยต้องไม่ต่ำกว่า 1.35 ในหัวข้อ และ 1.7 ในเนื้อหา เพราะสระบน สระล่าง และวรรณยุกต์จะถูกตัดหรือชนกันถ้าใช้ 1.1–1.2 แบบ Mercury ห้ามใช้ letter-spacing ค่าบวกกับภาษาไทย ให้ใช้ 0 เสมอ

---

## Tokens — Patterns (ลวดลาย)

ลวดลายแบ่งเป็น 2 ตระกูล ใช้ตามบทบาท ไม่ปะปนกัน

### ตระกูลที่ 1: ลายสานเสื่อกก (พื้นผิว / ตัวคั่น)

| Name | Token | ใช้กับ | วิธีสร้าง | Opacity |
|------|-------|--------|-----------|---------|
| ลายขัด (Plain weave) | `--pattern-weave-plain` | พื้นหลัง section จาง ๆ, กรอบ placeholder "รอภาพจริง" | CSS conic-gradient ลายตาราง | 6–10% |
| ลายสอง (Twill) | `--pattern-weave-twill` | แถบขอบเสื่อ (ตัวคั่น section), ขอบล่างแถบเมนู | CSS repeating-linear-gradient 45° | 100% (สูง 8–12px) |
| เส้นกก (Reed strand) | — | เส้นไทม์ไลน์, แถบความคืบหน้าการอ่าน, เส้นเชื่อมขั้นตอน | เส้นทึบ 3px + ปมเล็กทุกระยะ | 100% |

### ตระกูลที่ 2: ลายไทย (เครื่องประดับ)

| Name | ใช้กับ | วิธีสร้าง | ขนาด |
|------|--------|-----------|------|
| ประจำยาม | มุมการ์ด, จุดบนไทม์ไลน์, ตัวบอกเมนูที่เลือก, หัวข้อ section | SVG inline (`<symbol>`) สี currentColor | 10–24px |
| กรวยเชิง | ขอบล่างของ Hero, ขอบบนของ Footer | SVG หรือ CSS mask แบบสามเหลี่ยมเรียงซ้ำ | สูง 12–20px |
| ดอกพิกุล | bullet ในรายการ, ตัวคั่นเล็กระหว่างข้อมูล (·) | SVG 8px | 6–10px |
| กนก (แบบเรียบง่าย) | เฉพาะเครื่องประดับหัวข้อ Hero และหัวข้อ section 1 จุดต่อ section | SVG เส้นเรียบ ไม่ใช่ภาพเต็ม | กว้าง ≤ 64px |

### ตัวอย่างโค้ด

```css
/* ลายขัด: ตารางสานสองสี */
--pattern-weave-plain:
  conic-gradient(var(--color-dry-reed) 25%, var(--color-kok-canvas) 0 50%,
                 var(--color-dry-reed) 0 75%, var(--color-kok-canvas) 0) 0 0 / 16px 16px;

/* ลายสอง: เส้นทแยงแบบขอบเสื่อ */
--pattern-weave-twill:
  repeating-linear-gradient(45deg,
    var(--color-chad-red) 0 4px, var(--color-leaf-gold) 4px 6px,
    var(--color-reed-green) 6px 10px, var(--color-leaf-gold) 10px 12px);
```

```html
<!-- ประจำยาม: กลีบ 4 ทิศ + เกสรกลาง (วางไว้ครั้งเดียวต้น body แล้วเรียกด้วย <use>) -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="prajamyam" viewBox="0 0 24 24">
    <g fill="currentColor">
      <path id="petal" d="M12 1.5c2.6 3.2 2.6 6.2 0 8.5-2.6-2.3-2.6-5.3 0-8.5z"/>
      <use href="#petal" transform="rotate(90 12 12)"/>
      <use href="#petal" transform="rotate(180 12 12)"/>
      <use href="#petal" transform="rotate(270 12 12)"/>
      <circle cx="12" cy="12" r="2.2"/>
    </g>
  </symbol>
</svg>
<svg class="ornament" width="16" height="16" aria-hidden="true"><use href="#prajamyam"/></svg>
```

> ลวดลายทั้งหมดต้องเป็นของตกแต่ง (`aria-hidden="true"`) และห้ามอยู่หลังข้อความด้วย opacity เกิน 10%

---

## Tokens — Spacing & Shapes

**Base unit:** 4px
**Density:** spacious บน iPad, comfortable บนมือถือ

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 56 | 56px | `--spacing-56` |
| 72 | 72px | `--spacing-72` |
| 112 | 112px | `--spacing-112` |

### Border Radius

| Element | Value | เหตุผล |
|---------|-------|--------|
| buttons | 999px (pill) | นิ้วแตะง่าย สืบจาก Mercury |
| tags / chips | 999px | |
| bottom tab bar | 20px (มุมบน) | |
| cards (การ์ดผืนเสื่อ) | 10px | ผืนเสื่อเป็นสี่เหลี่ยม มุมโค้งเพียงเล็กน้อย |
| images | 6px | |
| default | 4px | |

### Layout (ตาม breakpoint)

| Token | Mobile (0–767) | iPad portrait (768–1023) | iPad landscape (1024–1366) | Desktop (≥1367) |
|-------|---------------|--------------------------|-----------------------------|-----------------|
| `--page-gutter` | 16px | 32px | 48px | auto |
| `--section-gap` | 56px | 72px | 96px | 112px |
| `--card-padding` | 20px | 28px | 32px | 32px |
| `--grid-gap` | 12px | 20px | 24px | 24px |
| `--page-max-width` | 100% | 100% | 1200px | 1200px |
| `--measure` (ความกว้างบรรทัด) | 100% | 64ch | 68ch | 68ch |

---

## Components

### Primary CTA Button (แดงชาด)
**Role:** ปุ่มหลักเพียงปุ่มเดียวต่อหน้าจอ เช่น "เริ่มเรียนรู้" "นำทางไปชุมชน"

พื้นแดงชาด #A3302A, ตัวอักษรงาช้าง #F7EFDD, Sarabun 500 ขนาด 17px, radius 999px, padding 14px 28px, สูงอย่างน้อย 48px ไม่มีเงาและไม่มีขอบ มีประจำยามเล็ก 14px สีทองคำเปลวนำหน้าข้อความได้ ตอนแตะ (:active) ให้เข้มขึ้นเป็น #8A2722 และย่อเป็น scale(0.98)

### Ghost Outline Button (ครามเข้ม)
**Role:** ปุ่มรอง เช่น "ดูภาพทั้งหมด" "เปิดใน Apple Maps"

พื้นโปร่ง, ขอบ 1.5px ครามเข้ม, ตัวอักษรครามเข้ม, Sarabun 500 ขนาด 16px, radius 999px, สูงอย่างน้อย 44px บนแถบครามราตรีให้เปลี่ยนขอบและตัวอักษรเป็นงาช้าง ห้ามใช้แดงชาดกับปุ่มรอง

### Bottom Tab Bar (มือถือเท่านั้น < 768px)
**Role:** เมนูหลักที่นิ้วโป้งเอื้อมถึง

ติดขอบล่างจอ พื้นครีมเสื่อใหม่ 92% + backdrop-filter: blur(16px) ขอบบนเป็นแถบลายสองสูง 4px และเพิ่ม padding ล่างด้วย env(safe-area-inset-bottom) มี 5 แท็บ ได้แก่ ประวัติ · ที่ตั้ง · ลาย · ขั้นตอน · ชุมชน แต่ละแท็บเป็นไอคอนเส้น 24px + ป้าย 12px พื้นที่แตะ ≥ 48×48px แท็บที่เลือกเป็นสีแดงชาด และมีประจำยาม 8px อยู่เหนือไอคอน ถ้าจอกว้างไม่ถึง 360px ให้ซ่อนป้ายเหลือแต่ไอคอน

### Top Navigation (iPad / Desktop ≥ 768px)
**Role:** เมนูหลักบนจอใหญ่ (เทียบ Transparent Top Navigation Bar)

ซ้อนบน Hero แบบโปร่ง ตัวอักษรงาช้าง เมื่อเลื่อนลงเกิน Hero ให้เปลี่ยนเป็นพื้นครีมเสื่อใหม่ + blur(20px) ตัวอักษรครามเข้ม และมีแถบลายสอง 4px ที่ขอบล่าง ด้านซ้ายเป็นโลโก้ (ประจำยาม + "เสื่อกกจันทบูร" ฟอนต์ Chonburi) ตรงกลางเป็นลิงก์ทุก section แบบ pill ส่วนลิงก์ที่เลือกมีพื้นกกแห้ง

### Full-Bleed Hero (คลี่เสื่อ)
**Role:** หน้าแรกสร้างบรรยากาศ (เทียบ Full-Bleed Hero Section)

สูง 100dvh (ห้ามใช้ 100vh) และขยายพื้นที่ใต้รอยบากด้วย safe-area พื้นหลังเป็นภาพจริงเสื่อกกหรือการทอ ทับด้วย gradient ครามราตรีจาก 0% ด้านบนถึง 75% ด้านล่าง เนื้อหาวางชิดล่างบนมือถือ (โซนนิ้วโป้ง) และกึ่งกลางบน iPad
ลำดับเนื้อหา: ลายกนกเรียบ (สีทอง) → ชื่อ "เสื่อกกจันทบูร" (Chonburi, display) → คำโปรย (Sarabun body-lg สีงาช้าง) → ปุ่มแดงชาด "เริ่มเรียนรู้" → เครดิตภาพ caption มุมขวาล่าง
ขอบล่างสุดเป็นแถบกรวยเชิงสีผืนกก เชื่อม Hero เข้ากับเนื้อหา
แอนิเมชันเปิด: ภาพค่อย ๆ เผยจากบนลงล่างเหมือนคลี่ม้วนเสื่อ (clip-path inset) ใช้เวลา ≤ 1.2 วินาที และปิดเมื่อ prefers-reduced-motion

### Section Heading (หัวข้อแบบลายไทย)
**Role:** เปิดทุก section

เรียงลำดับ: เลขไทยกำกับ section ("๑" "๒" …) ใน Noto Serif Thai สีทองคำเปลว 14px → ชื่อ section (Chonburi, section-title, แดงชาด) → เส้นคู่สีเส้นกก กว้าง 64px โดยมีประจำยาม 12px คั่นตรงกลาง (───✦───) → คำอธิบายย่อ 1 บรรทัด (body-sm น้ำตาลหม่น) จัดกึ่งกลางทั้งบนมือถือและ iPad

### Mat Card (การ์ดผืนเสื่อ)
**Role:** กล่องเนื้อหาหลัก (เทียบ Graphite Card)

พื้นครีมเสื่อใหม่ #FBF6EA, radius 10px, padding ตาม `--card-padding` และไม่มีเงา ขอบเป็น "ริมเสื่อ" คือเส้นนอก 1px สีเส้นกก + เส้นใน 1px สีทองคำเปลว (outline-offset หรือ box-shadow inset 0 0 0 4px canvas, 0 0 0 5px gold) มุมบนซ้ายและล่างขวามีประจำยาม 10px สีทองคำเปลวทับเส้นขอบ

### Pattern Card (การ์ดลายเสื่อ)
**Role:** แสดงลายแต่ละแบบใน section รูปแบบลาย

ภาพจริงสัดส่วน 4:5 radius 6px อยู่ด้านบน ใต้ภาพมีชื่อลาย (heading-sm), คำอธิบาย 2–3 บรรทัด และแท็กเขียวใบกก (ถ้าแหล่งข้อมูลระบุหมวด) ห้ามใส่ filter หรือ overlay บนภาพลายเสื่อ เพราะสีและลายต้องตรงของจริง
- **มือถือ:** แถวเลื่อนแนวนอน scroll-snap-type: x mandatory การ์ดกว้าง 78% ให้เห็นใบถัดไปโผล่ และมีจุดบอกตำแหน่งเป็นประจำยามเล็ก
- **iPad แนวตั้ง:** grid 2 คอลัมน์
- **iPad แนวนอน:** grid 3 คอลัมน์

### Lightbox (ดูภาพเต็ม)
พื้นครามราตรี 95% ภาพอยู่กึ่งกลาง ใต้ภาพมีคำบรรยายและเครดิตสีงาช้าง ปุ่มปิดเป็นวงกลม 48px อยู่มุมบนขวาโดยเผื่อ safe-area ปัดซ้าย/ขวาเพื่อเปลี่ยนภาพ ปัดลงเพื่อปิด ซูมสองนิ้วได้ บน iPad ที่ต่อคีย์บอร์ดให้ใช้ปุ่มลูกศรและ Esc ได้ เป็นจุดเดียวในระบบที่ใช้เงาได้

### Reed Timeline (ไทม์ไลน์เส้นกก)
**Role:** section ประวัติความเป็นมา

เส้นกกแนวตั้งสีเส้นกก 3px แต่ละเหตุการณ์มีประจำยาม 20px (แดงชาด) เป็นปม และมี Mat Card ข้าง ๆ
- **มือถือ:** เส้นอยู่ชิดซ้าย การ์ดอยู่ทางขวาทั้งหมด
- **iPad แนวนอน:** เส้นอยู่กลาง การ์ดสลับซ้ายขวา
เมื่อเลื่อนถึงแต่ละช่วง ให้เส้น "สาน" ยาวลงมาถึงปมนั้น (ใช้ IntersectionObserver)

### Process Step (ขั้นตอนการผลิต)
ป้ายหมายเลขเป็นเลขไทย (`list-style: thai` หรือ counter แบบ thai) อยู่ในรูปสี่เหลี่ยมข้าวหลามตัด 40px พื้นแดงชาด ตัวเลขงาช้าง ต่อด้วยชื่อขั้นตอน ภาพจริง และคำอธิบาย ระหว่างขั้นมีเส้นกกเชื่อม
- **มือถือ:** เรียงลงเป็นแถวเดียว
- **iPad:** grid 2 คอลัมน์ โดยเส้นเชื่อมเป็นแนวซิกแซก

### Photo Figure (ภาพจริงพร้อมเครดิต)
`<figure>` ภาพมี aspect-ratio คงที่ radius 6px ใต้ภาพเป็น `<figcaption>` Sarabun caption สีน้ำตาลหม่น รูปแบบ: "คำบรรยาย — ภาพ: [ชื่อเว็บ] ↗" โดยลิงก์ไปหน้าต้นทาง

### Image Placeholder (รอภาพจริง)
ใช้เมื่อหาภาพจริงไม่ได้ ใช้สัดส่วนเดียวกับภาพจริง พื้นลายขัด 10% บนกกแห้ง มีประจำยาม 24px อยู่กลาง และข้อความ "รอภาพจริง" สีน้ำตาลหม่น

### Map Card (สถานที่ตั้ง)
Mat Card ที่มีช่องแผนที่สัดส่วน 4:3 (มือถือ) หรือ 16:9 (iPad) พื้นกกแห้ง ตอนแรกยังไม่โหลด iframe แต่แสดงปุ่ม Ghost "แสดงแผนที่" เมื่อแตะจึงโหลด Google Maps ใต้แผนที่มีปุ่มแดงชาด "นำทาง (Google Maps)" + ปุ่ม Ghost "เปิดใน Apple Maps" บนมือถือให้เรียงลงและกว้างเต็ม

### Woven Divider (ขอบเสื่อ)
ตัวคั่นระหว่าง section สูง 10px ใช้ลายสอง กว้างเต็ม gutter และมีเส้นทองคำเปลว 1px ขนาบบนล่าง

### Reading Progress (เส้นกกนำทาง)
แถบสูง 3px ติดขอบบนจอ (ใต้ safe-area-inset-top) สีแดงชาด ยาวขึ้นตามการเลื่อนหน้า และมีประจำยาม 8px วิ่งอยู่ที่ปลายแถบ

### Footer (ครามราตรี)
**Role:** เครดิตและลิขสิทธิ์ (เทียบ Disclaimer Banner)

พื้นครามราตรีและลายขัดสีทอง 6% ขอบบนเป็นกรวยเชิงสีครามราตรี (ชี้ขึ้น) ภายในมีชื่อเว็บ (Chonburi สีทองคำเปลว), รายการแหล่งอ้างอิง [1][2][3], เครดิตภาพ และข้อความ "ลิขสิทธิ์เนื้อหาและภาพเป็นของหน่วยงานต้นทาง" (caption สีงาช้าง 80%) บนมือถือเพิ่ม padding ล่างเท่าความสูงของ Bottom Tab Bar + safe-area

---

## Do's and Don'ts

### Do
- ใช้แดงชาด #A3302A กับปุ่มหลักเพียงปุ่มเดียวต่อหน้าจอ และกับสถานะเมนูที่เลือก
- ใช้ลายสานเสื่อเป็นพื้นผิวและตัวคั่น ส่วนลายไทยใช้เป็นเครื่องประดับกรอบ หัวข้อ และไอคอน
- ให้ภาพจริงเป็นพระเอกของทุก section และใส่เครดิตทุกภาพ
- แยกชั้นด้วยค่าสี (ผืนกก → ครีมเสื่อใหม่) และขอบริมเสื่อ ไม่ใช้เงา
- ใช้เลขไทยกับลำดับ section ขั้นตอน และไทม์ไลน์
- ใช้ line-height ≥ 1.7 กับเนื้อหาไทย และ ≥ 1.35 กับหัวข้อ
- ทำพื้นที่แตะ ≥ 44×44px (ปุ่มหลัก ≥ 48px) และเว้นระยะห่างระหว่างกัน ≥ 8px
- ใช้แถบครามราตรีเฉพาะ 3 จุด คือ Hero, section เน้น 1 จุด (เช่น คุณค่าและการสืบสาน) และ Footer

### Don't
- อย่าวางลายกนกหรือลายไทยเต็มพื้นหลังข้อความ และอย่าใช้ลวดลายทับข้อความด้วย opacity เกิน 10%
- อย่าใช้ทองคำเปลวเป็นตัวอักษรบนพื้นสีอ่อน (contrast ต่ำ)
- อย่าเพิ่มสีนอก palette เช่น ชมพู ฟ้าสด หรือ gradient รุ้ง
- อย่าใส่ filter, sepia หรือ overlay บนภาพลายเสื่อ เพราะสีและลายต้องตรงของจริง (overlay ใช้ได้เฉพาะภาพ Hero)
- อย่าใช้ letter-spacing ค่าบวก หรือ line-height 1.1–1.2 กับภาษาไทย
- อย่าใช้ฟังก์ชันที่ต้อง hover ถึงจะใช้ได้ และอย่าใช้ user-scalable=no
- อย่าใช้ภาพ AI ภาพสต็อก หรือภาพจากแหล่งอื่นนอกแหล่งอ้างอิง
- อย่าใช้ตราสัญลักษณ์ส่วนพระองค์ ตราพระราชลัญจกร หรือพระบรมฉายาลักษณ์เป็นของตกแต่ง ถ้าเนื้อหาเกี่ยวกับ "เสื่อสมเด็จฯ" ให้ใช้เพียงภาพจากแหล่งข้อมูลพร้อมคำบรรยายที่ถูกต้องและสุภาพ
- อย่าใช้ลายเกิน 2 ชนิดในการ์ดใบเดียว

---

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | ผืนกก | `#F3E9D2` | พื้นหลังหน้า |
| 1 | ครีมเสื่อใหม่ | `#FBF6EA` | การ์ด แถบเมนูเมื่อเลื่อน |
| 2 | กกแห้ง | `#E6D5AE` | พื้นยุบ แท็ก placeholder ช่องแผนที่ |
| Dark | ครามราตรี | `#16223A` | Hero overlay, section เน้น, Footer, Lightbox |

## Elevation

ไม่ใช้เงาเช่นเดียวกับ Mercury ชั้นของเนื้อหาสื่อด้วยค่าสี (ผืนกก → ครีมเสื่อใหม่) และขอบ "ริมเสื่อ" เส้นคู่ เหมือนผืนเสื่อที่ปูซ้อนบนพื้นกก ข้อยกเว้นเดียวคือ Lightbox ที่ใช้เงานุ่ม 0 24px 64px rgba(22,34,58,.4)

## Imagery

ภาพถ่ายจริงจาก 3 แหล่งข้อมูลอ้างอิงเท่านั้น ได้แก่ ผืนเสื่อ ลายเสื่อ ต้นกก การย้อม การทอ ผู้คน และชุมชน
- **Hero:** ภาพเต็มจอ ทับ gradient ครามราตรีเพื่อให้อ่านตัวอักษรออก
- **ภาพลายเสื่อ:** ห้ามปรับสี ห้ามครอบตัดจนลายไม่ครบรูปแบบ
- **ภาพบุคคล:** ใส่คำบรรยายตามที่แหล่งข้อมูลระบุ ห้ามตั้งชื่อเอง
- **ไอคอน:** เส้นบาง 1.75px สีครามเข้ม ปลายมน ขนาด 24px ใช้แบบเดียวกันทั้งเว็บ (เช่น ชุด Lucide แบบ inline SVG)
- ภาพทุกภาพต้องมี srcset (1x/2x สำหรับ Retina), aspect-ratio คงที่, loading="lazy" (ยกเว้น Hero) และเป็น WebP ไม่เกิน 200KB (Hero ≤ 350KB)

## Layout

Mobile-first พื้นผืนกกเต็มจอ เนื้อหาอยู่ใน gutter ตาม breakpoint

| Section | Mobile (0–767) | iPad portrait (768–1023) | iPad landscape (1024–1366) |
|---|---|---|---|
| เมนู | Bottom Tab Bar | Top Navigation | Top Navigation + สารบัญข้าง sticky ใน section ยาว |
| Hero | 100dvh เนื้อหาชิดล่าง | 100dvh เนื้อหากึ่งกลาง | 100dvh เนื้อหากึ่งกลาง max 640px |
| ประวัติ | ไทม์ไลน์เส้นซ้าย | ไทม์ไลน์เส้นซ้าย การ์ดกว้างขึ้น | ไทม์ไลน์เส้นกลาง สลับซ้ายขวา |
| สถานที่ตั้ง | ข้อความ → แผนที่ → ปุ่มเรียงลง | ข้อความ → แผนที่ 16:9 | 2 คอลัมน์: ข้อความ 5/12 + แผนที่ 7/12 |
| รูปแบบลาย | การ์ดปัดแนวนอน | grid 2 คอลัมน์ | grid 3 คอลัมน์ |
| ขั้นตอนการผลิต | 1 คอลัมน์ | 2 คอลัมน์ | 2 คอลัมน์ ภาพใหญ่ขึ้น |
| ชุมชน | 1 คอลัมน์ | 2 คอลัมน์ | 2 คอลัมน์ ภาพ + ข้อความสลับ |
| คุณค่าและการสืบสาน | แถบครามราตรี 1 คอลัมน์ | แถบครามราตรี | แถบครามราตรี 2 คอลัมน์ |

- ทุก section ใช้ scroll-margin-top เท่าความสูงเมนู + 16px
- หมุนจอแล้วต้องไม่มี layout แตก และไม่มีแถบเลื่อนแนวนอน (ยกเว้นแกลเลอรีที่ตั้งใจให้ปัด)
- viewport: `width=device-width, initial-scale=1, viewport-fit=cover`

---

## Agent Prompt Guide

**Quick Color Reference**
- พื้นหลัง: #F3E9D2 ผืนกก
- การ์ด: #FBF6EA ครีมเสื่อใหม่
- ตัวอักษรหลัก: #1F2A44 ครามเข้ม
- ตัวอักษรรอง: #5C4A32 น้ำตาลหม่น
- เส้นขอบ: #B89A5E เส้นกก
- ปุ่มหลัก: #A3302A แดงชาด (ตัวอักษร #F7EFDD)
- ลายประดับ: #B8860B ทองคำเปลว, #4E6B3A เขียวใบกก
- แถบมืด: #16223A ครามราตรี

**Example Component Prompts**

1. สร้างการ์ดผืนเสื่อ: พื้น #FBF6EA, radius 10px, padding 20px (มือถือ)/28px (iPad), ไม่มีเงา, ขอบนอก 1px #B89A5E + เส้นในสีทอง #B8860B ห่าง 4px, ประจำยาม SVG 10px สีทองที่มุมบนซ้ายและล่างขวา หัวการ์ด Noto Serif Thai 600 ขนาด 20px สี #1F2A44 เนื้อหา Sarabun 400 ขนาด 17px line-height 1.8

2. สร้างปุ่มหลัก: พื้น #A3302A ตัวอักษร #F7EFDD Sarabun 500 ขนาด 17px radius 999px สูง ≥ 48px padding 14px 28px ไม่มีขอบและเงา มีประจำยามสีทอง 14px นำหน้า :active เป็น #8A2722 scale(.98)

3. สร้าง Hero คลี่เสื่อ: สูง 100dvh, ภาพจริงเต็มจอ + gradient #16223A 0→75% จากบนลงล่าง ชื่อ Chonburi 32px (มือถือ)/44px (iPad) สี #F7EFDD line-height 1.35 เนื้อหาชิดล่างบนมือถือ ขอบล่างเป็นกรวยเชิงสี #F3E9D2 แอนิเมชัน clip-path คลี่จากบนลงล่าง 1.2s ปิดเมื่อ prefers-reduced-motion

4. สร้าง Bottom Tab Bar: fixed bottom, พื้น rgba(251,246,234,.92) + blur(16px), ขอบบนลายสอง 4px, padding-bottom env(safe-area-inset-bottom), 5 แท็บ ไอคอนเส้น 24px + ป้าย Sarabun 12px แท็บที่เลือกเป็น #A3302A และมีประจำยาม 8px ด้านบน แสดงเฉพาะจอ < 768px

5. สร้างหัวข้อ section: เลขไทย "๓" Noto Serif Thai 14px สี #B8860B → ชื่อ Chonburi 28px สี #A3302A → เส้นคู่ #B89A5E กว้าง 64px มีประจำยาม 12px กลาง → คำอธิบาย Sarabun 15px สี #5C4A32 จัดกลาง

## Typography Philosophy

ระบบตัวอักษรใช้ฟอนต์ไทยมีหัวทั้งหมดเพื่อความเป็นไทยและอ่านง่าย **Chonburi** ให้น้ำเสียงดั้งเดิมแบบป้ายโบราณ ใช้เฉพาะชื่อเว็บและหัวข้อ section **Noto Serif Thai** ที่น้ำหนัก 500–600 สืบปรัชญาน้ำหนักกลางของ Mercury คือหนักแน่นแต่ไม่ตะโกน ใช้กับหัวข้อรอง **Sarabun** รับงานเนื้อหาและ UI ขนาด 17px บนมือถือพร้อม line-height 1.8 เพื่อให้สระและวรรณยุกต์มีที่หายใจ ภาพรวมคือน้ำเสียงที่สุภาพ อบอุ่น ภูมิใจในท้องถิ่น ไม่ใช่โฆษณาและไม่เป็นทางการเกินไป

## Design Lineage

- **จาก Mercury:** พื้นผิวเรียบไม่มีเงา, สีเน้นสีเดียวสำหรับปุ่มหลัก, ปุ่ม pill, ภาพถ่ายเต็มจอเป็นตัวสร้างอารมณ์, เมนูโปร่งที่เปลี่ยนเป็น frosted-glass เมื่อเลื่อน, จังหวะพื้นที่ว่างกว้าง
- **เปลี่ยนเป็นไทย:** ธีมสว่างอุ่นแทนธีมมืด, palette จากกกและสีย้อม, ฟอนต์ไทยมีหัว, ลายสานเสื่อเป็นพื้นผิว, ลายไทยเป็นเครื่องประดับ, ขอบริมเสื่อแทนการยกระดับด้วยค่าสีอย่างเดียว, เลขไทย, mobile-first พร้อม Bottom Tab Bar

---

## Quick Start

### Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Chonburi&family=Noto+Serif+Thai:wght@500;600&family=Sarabun:wght@400;500;600&display=swap" rel="stylesheet">
```

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-kok-canvas: #F3E9D2;
  --color-mat-card: #FBF6EA;
  --color-dry-reed: #E6D5AE;
  --color-reed-line: #B89A5E;
  --color-kram-ink: #1F2A44;
  --color-umber-text: #5C4A32;
  --color-chad-red: #A3302A;
  --color-chad-red-pressed: #8A2722;
  --color-reed-green: #4E6B3A;
  --color-leaf-gold: #B8860B;
  --color-night-kram: #16223A;
  --color-ivory-thai: #F7EFDD;

  /* Fonts */
  --font-display: 'Chonburi', 'Noto Serif Thai', serif;
  --font-heading: 'Noto Serif Thai', serif;
  --font-body: 'Sarabun', 'Noto Sans Thai', system-ui, sans-serif;

  /* Type scale — mobile */
  --text-caption: 13px;
  --text-body-sm: 15px;
  --text-body: 17px;
  --text-body-lg: 19px;
  --text-heading-sm: 20px;
  --text-heading: 22px;
  --text-section: 28px;
  --text-display: 32px;
  --leading-body: 1.8;
  --leading-heading: 1.45;
  --leading-display: 1.35;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-56: 56px;
  --spacing-72: 72px;
  --spacing-112: 112px;

  /* Layout — mobile */
  --page-gutter: 16px;
  --section-gap: 56px;
  --card-padding: 20px;
  --grid-gap: 12px;
  --page-max-width: 1200px;
  --measure: 100%;
  --tap-min: 44px;

  /* Radius */
  --radius-pill: 999px;
  --radius-tabbar: 20px;
  --radius-card: 10px;
  --radius-image: 6px;
  --radius-default: 4px;

  /* Patterns */
  --pattern-weave-plain:
    conic-gradient(var(--color-dry-reed) 25%, var(--color-kok-canvas) 0 50%,
                   var(--color-dry-reed) 0 75%, var(--color-kok-canvas) 0) 0 0 / 16px 16px;
  --pattern-weave-twill:
    repeating-linear-gradient(45deg,
      var(--color-chad-red) 0 4px, var(--color-leaf-gold) 4px 6px,
      var(--color-reed-green) 6px 10px, var(--color-leaf-gold) 10px 12px);

  /* Motion */
  --ease-unroll: cubic-bezier(.22, .8, .24, 1);
  --duration-unroll: 1200ms;
}

/* iPad portrait */
@media (min-width: 768px) {
  :root {
    --text-caption: 14px;
    --text-body-sm: 16px;
    --text-body: 18px;
    --text-body-lg: 20px;
    --text-heading-sm: 22px;
    --text-heading: 26px;
    --text-section: 36px;
    --text-display: 44px;
    --page-gutter: 32px;
    --section-gap: 72px;
    --card-padding: 28px;
    --grid-gap: 20px;
    --measure: 64ch;
  }
}

/* iPad landscape / iPad Pro */
@media (min-width: 1024px) {
  :root {
    --text-body-lg: 21px;
    --text-heading: 28px;
    --text-section: 40px;
    --text-display: 56px;
    --page-gutter: 48px;
    --section-gap: 96px;
    --card-padding: 32px;
    --grid-gap: 24px;
    --measure: 68ch;
  }
}

@media (min-width: 1367px) {
  :root { --section-gap: 112px; }
}

@media (prefers-reduced-motion: reduce) {
  :root { --duration-unroll: 0ms; }
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```
